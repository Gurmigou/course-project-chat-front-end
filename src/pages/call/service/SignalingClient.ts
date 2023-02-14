import {io, Socket} from "socket.io-client";

export class SignalingClient {
    private socket: Socket | null;
    private readonly roomId: number;
    private readonly userId: number;

    constructor(roomId: number, userId: number) {
        this.socket = null;
        this.roomId = roomId;
        this.userId = userId;
    }

    public connectToRoom(): Socket {
        this.socket = io("ws://localhost:3020", {
            transports: ["websocket"],
        });
        this.signalConnectToRoom();
        return this.socket;
    }

    public disconnectFromRoom(): void {
        if (!this.socket) return;
        this.socket.emit("left_room", this.userId, this.roomId);
        this.socket.disconnect();
        this.socket = null;
    }

    private signalConnectToRoom(): void {
        if (!this.socket) return;
        this.socket.emit("joined_room", this.userId, this.roomId);
    }

    public sendMessageToRoomPeer(message: string): void {
        if (!this.socket) return;
        this.socket.emit("msg_to_peer", this.userId, this.roomId, {message: message});
    }
}

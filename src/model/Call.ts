export type DataCommunication = {
    from: number | null,
    to: number | null,
    message: string | null,
}

export type PeerOffer = {
    type: "offer" | "candidate" | "answer",
    data: RTCSessionDescriptionInit | RTCIceCandidate | null
}

export type CallInfo = {
    username: string,
    peerUsername: string,
    roomId: number,
    cameraOn: boolean,
    peerCameraOn: boolean,
    handleChatToPeer: (message: string) => void,
}

export type ChatRoom = {
    chatId: number;
    yourUsername: string;
    peerUsername: string;
}
import {SignalingClient} from "./SignalingClient";
import {DataCommunication, PeerOffer} from "../../../model/Call";
import {Dispatch, SetStateAction} from "react";

export class CallConnectionService {
    private localStream: MediaStream | undefined;
    private remoteStream: MediaStream | undefined;
    private peerConnection: RTCPeerConnection | undefined;
    private myVideo: HTMLVideoElement;
    private peerVideo: HTMLVideoElement;
    private client: SignalingClient | undefined;
    private setPeerConnected: Dispatch<SetStateAction<boolean>> | undefined;

    private readonly servers = {
        iceServers: [
            {
                urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302']
            }
        ]
    }

    private readonly videoConstraints: MediaStreamConstraints = {
        video: true,
        audio: false
    }

    constructor(userVideo1: HTMLVideoElement, userVideo2: HTMLVideoElement) {
        this.myVideo = userVideo1;
        this.peerVideo = userVideo2;
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    }

    public async initializeConnection(username: string, roomId: number,
                                      setPeerConnected: Dispatch<SetStateAction<boolean>>,
                                      signalingClient: SignalingClient) {
        this.setPeerConnected = setPeerConnected;
        // this.client = new SignalingClient(roomId, username);
        this.client = signalingClient;
        const connection = await this.client.connectToRoom();

        connection.on("joined_room", this.handleUserJoined)
        connection.on("msg_to_peer", this.handleMessageFromPeer)
        connection.on("left_room", this.handlePeerLeft)
        // connection.on("chat_to_peer", handleChatToPeer)

        // ask for video and audio permission
        this.localStream = await navigator.mediaDevices.getUserMedia(this.videoConstraints)

        // set source of video user-1
        this.myVideo.srcObject = this.localStream
    }

    private handleBeforeUnload = (): void => {
        this.client?.disconnectFromRoom();
    }

    private handleUserJoined = async (peerId: number) => {
        await this.createOffer();
    };

    private handleMessageFromPeer = async (communicationMsg: DataCommunication) => {
        const peerOffer: PeerOffer = JSON.parse(communicationMsg.message!);
        if (peerOffer.type === "offer") {
            await this.createAnswer(peerOffer.data as RTCSessionDescriptionInit);
        } else if (peerOffer.type === "answer") {
            await this.addAnswer(peerOffer.data as RTCSessionDescriptionInit);
        } else if (peerOffer.type === "candidate") {
            await this.peerConnection?.addIceCandidate(peerOffer.data as RTCIceCandidate);
        }
    };

    private handlePeerLeft = (peerId: number) => {
        this.setPeerConnected!(false);
    }

    private async createOffer() {
        await this.createPeerConnection();
        let offer = await this.peerConnection?.createOffer()
        await this.peerConnection?.setLocalDescription(offer)

        this.client?.sendMessageToRoomPeer(JSON.stringify(
            {type: "offer", data: offer} as PeerOffer));
    }

    private async createAnswer(offer: RTCSessionDescriptionInit) {
        await this.createPeerConnection();
        await this.peerConnection?.setRemoteDescription(offer);
        const answer = await this.peerConnection?.createAnswer();
        await this.peerConnection?.setLocalDescription(answer);

        this.client?.sendMessageToRoomPeer(JSON.stringify(
            {type: "answer", data: answer} as PeerOffer));
    }

    private async addAnswer(remoteDescription: RTCSessionDescriptionInit) {
        if (!this.peerConnection?.currentRemoteDescription) {
            await this.peerConnection?.setRemoteDescription(remoteDescription);
        }
    }

    private async createPeerConnection() {
        this.peerConnection = new RTCPeerConnection(this.servers);

        this.remoteStream = new MediaStream();
        this.peerVideo.srcObject = this.remoteStream;
        if (this.setPeerConnected) {
            this.setPeerConnected(true);
        }

        if (!this.localStream) {
            this.localStream = await navigator.mediaDevices.getUserMedia(this.videoConstraints);
            this.myVideo.srcObject = this.localStream;
        }

        this.localStream.getTracks().forEach(track => {
            this.peerConnection?.addTrack(track, this.localStream!);
        })

        this.peerConnection.ontrack = (event) => {
            event.streams[0].getTracks().forEach(trackRemote => {
                this.remoteStream?.addTrack(trackRemote)
            })
        }

        this.peerConnection.onicecandidate = async (event) => {
            if (event.candidate) {
                this.client?.sendMessageToRoomPeer(JSON.stringify(
                    {type: "candidate", data: event.candidate} as PeerOffer));
            }
        }
    }
}
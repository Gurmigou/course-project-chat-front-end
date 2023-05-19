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
}

export type ChatRoom = {
    chatId: number;
    yourUsername: string;
    peerUsername: string;
}

export type TextChatParams = {
    roomId: number;
    peerUsername: string;
    username: string;
    open: boolean;
};

export type ReceivedMessage = {
    from: string;
    message: string;
}
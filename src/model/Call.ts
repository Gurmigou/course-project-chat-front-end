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
    userId: number,
    roomId: number,
    cameraOn: boolean,
    peerCameraOn: boolean,
}
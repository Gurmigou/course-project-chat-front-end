import {VideoChat} from "./videoChat/VideoChat";
import {ChatControlButtons} from "./common/ChatControlButtons";
import {TextChat} from "./textChat/TextChat";
import {useEffect, useState} from "react";
import {CallContainer, ChatContainer} from "../../../style/call/CallStyle";
import {useLocation, useNavigate} from "react-router-dom";
import {SignalingClient} from "../service/SignalingClient";
import { SignalingContext } from "../service/SignalingContext";

export const Call = () => {
    const location = useLocation();

    const username = location.state.chatRoom.yourUsername;
    const peerUsername = location.state.chatRoom.peerUsername;
    const roomId = location.state.chatRoom.chatId;

    const [signalingClient, setSignalingClient] = useState<SignalingClient>();

    useEffect(() => {
        const client = new SignalingClient(roomId, username);
        setSignalingClient(client);
    }, [roomId, username]);

    const [chatOpen, setChatOpen] = useState(true);
    const [micOff, setMicOff] = useState(false);
    const [videoOff, setVideoOff] = useState(false);
    const navigate = useNavigate();

    const handleChatOpen = () => setChatOpen(!chatOpen);
    const handleMicOff = () => setMicOff(!micOff);
    const handleVideoOff = () => setVideoOff(!videoOff);
    const handleCallEnd = () => {
        navigate('/')
    };

    const handleNextPeer = () => {
        // TODO add end of chat request
        navigate('/waiting-room');
    }

    return (
        <SignalingContext.Provider value={signalingClient}>
            <CallContainer>
                <ChatContainer>
                    <VideoChat username={username} peerUsername={peerUsername} roomId={roomId}
                               cameraOn={!videoOff} peerCameraOn={true}/>
                    <ChatControlButtons micOff={micOff}
                                        videoOff={videoOff}
                                        handleMicOff={handleMicOff}
                                        handleVideoOff={handleVideoOff}
                                        handleChatOpen={handleChatOpen}
                                        handleCallEnd={handleCallEnd}
                                        handleNextPeer={handleNextPeer}
                    />
                </ChatContainer>
                <TextChat open={chatOpen} roomId={roomId} username={username} peerUsername={peerUsername}></TextChat>
            </CallContainer>
        </SignalingContext.Provider>
    );
}
import {VideoChat} from "./videoChat/VideoChat";
import {ChatControlButtons} from "./common/ChatControlButtons";
import {TextChat} from "./textChat/TextChat";
import {useEffect, useState} from "react";
import {CallContainer, ChatContainer} from "../../../style/call/CallStyle";
import {useLocation, useNavigate} from "react-router-dom";
import {SignalingClient} from "../service/SignalingClient";
import { SignalingContext } from "../service/SignalingContext";
import {CallConnectionService} from "../service/CallConnectionService";

export const Call = () => {
    const location = useLocation();

    const username = location.state.chatRoom.yourUsername;
    const peerUsername = location.state.chatRoom.peerUsername;
    const roomId = location.state.chatRoom.chatId;

    const [signalingClient, setSignalingClient] = useState<SignalingClient>();
    const [connectionService, setConnectionService] = useState<CallConnectionService>();

    useEffect(() => {
        const client = new SignalingClient(roomId, username);
        setSignalingClient(client);
    }, [roomId, username]);

    const [chatOpen, setChatOpen] = useState(true);
    const [micOff, setMicOff] = useState(false);
    const [videoOff, setVideoOff] = useState(false);
    const [peerCameraOff, setPeerCameraOff] = useState(false);

    const navigate = useNavigate();

    const handleChatOpen = () => setChatOpen(!chatOpen);

    const handleMicroToggle = () => {
        setMicOff(!micOff);
        connectionService?.handleMicroToggle(roomId, username);
    }

    const handleVideoToggle = () => {
        setVideoOff(!videoOff);
        connectionService?.handleCameraToggle(roomId, username)
    }

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
                               cameraOn={!videoOff} peerCameraOn={!peerCameraOff}
                               setConnectionService={setConnectionService}
                               setPeerCameraOff={setPeerCameraOff}
                    />
                    <ChatControlButtons micOff={micOff}
                                        videoOff={videoOff}
                                        handleMicroToggle={handleMicroToggle}
                                        handleVideoToggle={handleVideoToggle}
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
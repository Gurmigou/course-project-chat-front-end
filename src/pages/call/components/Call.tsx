import {VideoChat} from "./videoChat/VideoChat";
import {ChatControlButtons} from "./common/ChatControlButtons";
import {TextChat} from "./textChat/TextChat";
import {useState} from "react";
import {CallContainer, ChatContainer} from "../../../style/call/CallStyle";
import {useNavigate} from "react-router-dom";

export const Call = () => {
    const userId = Math.floor(Math.random() * 10000);
    const roomId = 1;

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
    const handleNextPeer = () => console.log('Next peer');

    return (
        <CallContainer>
            <ChatContainer>
                <VideoChat userId={userId} roomId={roomId}
                           cameraOn={!videoOff} peerCameraOn={true}
                />
                <ChatControlButtons micOff={micOff}
                                    videoOff={videoOff}
                                    handleMicOff={handleMicOff}
                                    handleVideoOff={handleVideoOff}
                                    handleChatOpen={handleChatOpen}
                                    handleCallEnd={handleCallEnd}
                                    handleNextPeer={handleNextPeer}
                />
            </ChatContainer>
            <TextChat open={chatOpen}></TextChat>
        </CallContainer>
    );
}
import {VideoChat} from "./videoChat/VideoChat";
import {ChatControlButtons} from "./common/ChatControlButtons";
import {TextChat} from "./textChat/TextChat";
import {useState} from "react";
import {CallContainer, ChatContainer} from "../../../style/call/CallStyle";

export const Call = () => {
    const [chatOpen, setChatOpen] = useState(true);
    const userId = Math.floor(Math.random() * 10000);
    const roomId = 1;
    return (
        <CallContainer>
            <ChatContainer>
                <VideoChat userId={userId} roomId={roomId}></VideoChat>
                <ChatControlButtons></ChatControlButtons>
            </ChatContainer>
            <TextChat open={chatOpen}></TextChat>
        </CallContainer>
    );
}
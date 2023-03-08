import {styled} from "@mui/material";
import {VideoChat} from "./videoChat/VideoChat";
import {ChatControlButtons} from "./common/ChatControlButtons";
import {TextChat} from "./textChat/TextChat";
import {useState} from "react";

const CallContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)',
    '@media (max-width: 1420px)': {
        height: 'auto',
    },
    overflow: 'hidden',
});

const ChatContainer = styled('div')({
    width: '100%',
    margin: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const Call = () => {
    const [chatOpen, setChatOpen] = useState(true);
    const userId = Math.floor(Math.random() * 10000);
    const roomId = 1;
    return (
        <CallContainer>
            <ChatContainer>
                {/*<button onClick={() => setChatOpen(!chatOpen)}>Toggle chat</button>*/}
                <VideoChat userId={userId} roomId={roomId}></VideoChat>
                <ChatControlButtons></ChatControlButtons>
            </ChatContainer>
            <TextChat open={chatOpen}></TextChat>
        </CallContainer>
    );
}
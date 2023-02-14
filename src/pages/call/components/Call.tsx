import {styled} from "@mui/material";
import {VideoChat} from "./VideoChat";
import {ChatControlButtons} from "./ChatControlButtons";

const CallContainer = styled('div')({
    width: '100%',
    height: '100vh',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const Call = () => {
    const userId = Math.floor(Math.random() * 10000);
    const roomId = 1;
    return (
        <CallContainer>
            <VideoChat userId={userId} roomId={roomId}></VideoChat>
            <ChatControlButtons></ChatControlButtons>
        </CallContainer>
    );
}
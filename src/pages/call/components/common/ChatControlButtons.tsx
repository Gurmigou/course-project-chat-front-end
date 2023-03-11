import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatIcon from '@mui/icons-material/Chat';
import {CallEnd, ChatControlButtonsContainer, Control, NextPeer} from "../../../../style/call/common/ChatControlButtonsStyle";

type ChatControlButtonsProps = {
    micOff: boolean;
    videoOff: boolean;
    handleMicOff: () => void;
    handleVideoOff: () => void;
    handleCallEnd: () => void;
    handleChatOpen: () => void;
    handleNextPeer: () => void;
}

export const ChatControlButtons = ({micOff, videoOff, handleMicOff, handleVideoOff, handleChatOpen, handleCallEnd, handleNextPeer}: ChatControlButtonsProps) => {
    return (
        <ChatControlButtonsContainer>
            <Control onClick={handleMicOff}>
                {micOff ? <MicIcon style={{color: 'white'}}/> :
                    <MicOffIcon style={{color: 'white'}}/>}
            </Control>
            <Control onClick={handleVideoOff}>
                {videoOff ? <VideocamIcon style={{color: 'white'}}/> :
                    <VideocamOffIcon style={{color: 'white'}}/>}
            </Control>
            <CallEnd onClick={handleCallEnd}>
                <CallEndIcon style={{color: 'white'}}/>
            </CallEnd>
            <Control onClick={handleChatOpen}>
                <ChatIcon style={{color: 'white'}}/>
            </Control>
            <NextPeer onClick={handleNextPeer}>
                <ArrowForwardIosIcon style={{color: 'white'}}/>
            </NextPeer>
        </ChatControlButtonsContainer>
    );
};
import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatIcon from '@mui/icons-material/Chat';
import {CallEnd, ChatControlButtonsContainer, Control, NextPeer} from "../../../../style/call/common/ChatControlButtonsStyle";
import {ChatControlButtonsProps} from "../../../../model/user/CommonUser";

export const ChatControlButtons = ({micOff, videoOff, handleMicroToggle, handleVideoToggle, handleChatOpen, handleLeaveCall, handleNextPeer}: ChatControlButtonsProps) => {
    return (
        <ChatControlButtonsContainer>
            <Control onClick={handleMicroToggle}>
                {micOff ? <MicOffIcon style={{color: 'white'}}/> :
                    <MicIcon style={{color: 'white'}}/>}
            </Control>
            <Control onClick={handleVideoToggle}>
                {videoOff ? <VideocamOffIcon style={{color: 'white'}}/> :
                    <VideocamIcon style={{color: 'white'}}/>}
            </Control>
            <CallEnd onClick={handleLeaveCall}>
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
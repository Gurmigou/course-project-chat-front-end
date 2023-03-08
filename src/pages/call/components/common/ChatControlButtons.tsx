import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatIcon from '@mui/icons-material/Chat';
import {CallEnd, ChatControlButtonsContainer, Control, NextPeer} from "../../../../style/call/common/ChatControlButtonsStyle";

export const ChatControlButtons = () => {
    return (
        <ChatControlButtonsContainer>
            <Control>
                <MicOffIcon style={{color: 'white'}}/>
            </Control>
            <Control>
                <VideocamOffIcon style={{color: 'white'}}/>
            </Control>
            <CallEnd>
                <CallEndIcon style={{color: 'white'}}/>
            </CallEnd>
            <Control>
                <ChatIcon style={{color: 'white'}}/>
            </Control>
            <NextPeer>
                <ArrowForwardIosIcon style={{color: 'white'}}/>
            </NextPeer>
        </ChatControlButtonsContainer>
    );
};
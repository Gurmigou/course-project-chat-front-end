import {Fab, styled} from "@mui/material";
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatIcon from '@mui/icons-material/Chat';
import {Colors} from "../../../../assets/Colors";

const ChatControlButtonsContainer = styled('div')({
    maxWidth: '1400px',
    display: 'flex',
    justifyContent: 'center',
    margin: '4rem auto',
});

const Control = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    background: '#495C83',
    width: '4rem',
    height: '4rem',
    '&:hover': {
        background: '#6a78b0',
    },
});

const CallEnd = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    width: '4rem',
    height: '4rem',
    background: '#e53e3e',
    '&:hover': {
        background: '#e56767',
    },
});

const NextPeer = styled(Fab)({
    margin: '0 2rem',
    borderRadius: '5px',
    width: '6rem',
    height: '4rem',
    background: Colors.color5,
    '&:hover': {
        background: Colors.color6,
    },
});

export const ChatControlButtons = () => {
    return (
        <ChatControlButtonsContainer>
            <Control>
                <MicOffIcon style={{color: 'white'}} />
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
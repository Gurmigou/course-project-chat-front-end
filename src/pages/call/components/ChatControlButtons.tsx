import {Fab, styled} from "@mui/material";
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ChatControlButtonsContainer = styled('div')({
    maxWidth: '1400px',
    display: 'flex',
    justifyContent: 'center',
    margin: '4rem auto',
});

const Control = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    background: '#532fda',
    width: '4rem',
    height: '4rem',
});

const CallEnd = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    width: '4rem',
    height: '4rem',
    background: '#e53e3e',
});

const NextPeer = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    width: '4rem',
    height: '4rem',
    background: '#1976d2',
});

export const ChatControlButtons = () => {
    return (
        <ChatControlButtonsContainer>
            <Control color="primary" aria-label="add">
                <MicOffIcon/>
            </Control>
            <Control color="primary" aria-label="add">
                <VideocamOffIcon/>
            </Control>
            <CallEnd color="primary" aria-label="add">
                <CallEndIcon/>
            </CallEnd>
            <NextPeer color="primary" aria-label="add">
                <ArrowForwardIosIcon/>
            </NextPeer>

        </ChatControlButtonsContainer>
    );
};
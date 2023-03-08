import {Fab, styled} from "@mui/material";
import {Colors} from "../../../assets/Colors";

export const ChatControlButtonsContainer = styled('div')({
    maxWidth: '1400px',
    display: 'flex',
    justifyContent: 'center',
    margin: '4rem auto',
});

export const Control = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    background: '#495C83',
    width: '4rem',
    height: '4rem',
    '&:hover': {
        background: '#6a78b0',
    },
});

export const CallEnd = styled(Fab)({
    margin: '0 1rem',
    borderRadius: '50%',
    width: '4rem',
    height: '4rem',
    background: '#e53e3e',
    '&:hover': {
        background: '#e56767',
    },
});

export const NextPeer = styled(Fab)({
    margin: '0 2rem',
    borderRadius: '5px',
    width: '6rem',
    height: '4rem',
    background: Colors.color5,
    '&:hover': {
        background: Colors.color6,
    },
});
import {styled} from "@mui/material";

export const CallContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)',
    '@media (max-width: 1420px)': {
        height: 'auto',
    },
    overflow: 'hidden',
});

export const ChatContainer = styled('div')({
    width: '100%',
    margin: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
})
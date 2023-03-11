import {styled} from "@mui/material";

export const VideoChatContainer = styled('div')({
    margin: '0 auto',
    maxWidth: '1400px'
});

export const VideoGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    '@media (max-width: 1420px)': {
        gridTemplateColumns: '1fr',
        maxWidth: '50rem',
        margin: '0 auto',
        gap: '6rem',
    },
    '@media (max-width: 760px)': {
        margin: '0 1rem',
    }
})

export const VideoPlayer = styled('video')({
    maxWidth: '640px',
    minHeight: '480px',
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    position: 'relative',
});

export const VideoPlayerContainer = styled('div')({});

export const NicknameText = styled('p')({
    position: 'absolute',
    width: '640px',
    color: 'white',
    fontSize: '1.5rem',
    marginTop: '1.5rem',
});
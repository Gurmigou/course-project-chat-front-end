import {CircularProgress, styled} from "@mui/material";
import {CSSProperties} from "react";
import {Colors} from "../../../../assets/Colors";

export type VideoInfoMessages =
    "Waiting for peer to join" |
    "You turned off your camera ⛔📷" |
    "Your peer turned off camera ⛔📷";

type VideoInfoCardProps = {
    style: CSSProperties,
    message: VideoInfoMessages,
    circularProgress?: boolean,
}

const WaitingPeerContainer = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    background: Colors.color3,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: '5px',
    '@media (max-width: 1420px)': {
        minHeight: '480px',
    },
})

const WaitingPeerText = styled('h1')({
    color: 'white',
    fontSize: '2rem',
})

export const VideoInfoCard = ({style, message, circularProgress}: VideoInfoCardProps) => {
    return (
        <WaitingPeerContainer style={style}>
            <WaitingPeerText>
                {message}
            </WaitingPeerText>
            {
                circularProgress &&
                <CircularProgress style={{color: 'white'}} size={'4rem'}/>
            }
        </WaitingPeerContainer>
    );
}
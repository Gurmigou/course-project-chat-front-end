import {CircularProgress} from "@mui/material";
import {CSSProperties} from "react";
import {WaitingPeerContainer, WaitingPeerText} from "../../../../style/call/videoChat/VideoInfoCardStyle";

export type VideoInfoMessages =
    "Waiting for peer to join" |
    "You turned off your camera ⛔📷" |
    "Your peer turned off camera ⛔📷";

type VideoInfoCardProps = {
    style: CSSProperties,
    message: VideoInfoMessages,
    circularProgress?: boolean,
}

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
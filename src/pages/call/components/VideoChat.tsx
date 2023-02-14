import {styled} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {CallConnectionService} from "../service/CallConnectionService";
import {WaitingPeerCard} from "./WaitingPeerCard";
import {ChatTimer} from "./ChatTimer";
import {CallInfo} from "../../../model/Call";
import {Block} from "@mui/icons-material";

const VideoChatContainer = styled('div')({
    margin: '0 auto',
    maxWidth: '1400px'
});

const VideoGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    '@media (max-width: 1420px)': {
        gridTemplateColumns: '1fr',
        maxWidth: '50rem',
        margin: '0 auto',
        gap: '6rem',
    }
})

const VideoPlayer = styled('video')({
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    position: 'relative',
});

const VideoPlayerContainer = styled('div')({
});

const NicknameText = styled('p')({
    position: 'absolute',
    width: '640px',
    color: 'white',
    fontSize: '1.5rem',
    marginTop: '1.5rem',
});

export const VideoChat = ({userId, roomId}: CallInfo) => {
    const [peerConnected, setPeerConnected] = useState<boolean>(false);

    const videoPlayerUser1 = useRef<HTMLVideoElement>(null);
    const videoPlayerUser2 = useRef<HTMLVideoElement>(null);
    let connected = false;

    useEffect(() => {
        if (!connected && videoPlayerUser1.current && videoPlayerUser2.current) {
            connected = true;
            const callConnection = new CallConnectionService(
                videoPlayerUser1.current,
                videoPlayerUser2.current);
            callConnection.initializeConnection(userId, roomId, setPeerConnected)
                .then(() => console.log('Connection initialized'));
        }
    }, [userId]);

    const getDisplayOnPeerConnected = (connected: boolean, display?: string): string => {
        return connected ? (display ? display : 'block') : 'none';
    }

    return (
        <VideoChatContainer>
            <ChatTimer startTimer={peerConnected}></ChatTimer>
            <VideoGrid>
                <VideoPlayerContainer>
                    <VideoPlayer ref={videoPlayerUser1}
                                 autoPlay playsInline>
                    </VideoPlayer>
                    <NicknameText>Gurmigou 🧍‍♂️ 😆 👀 </NicknameText>
                </VideoPlayerContainer>

                <VideoPlayer style={{display: getDisplayOnPeerConnected(peerConnected)}}
                             ref={videoPlayerUser2}
                             autoPlay playsInline>
                </VideoPlayer>
                <WaitingPeerCard style={{display: getDisplayOnPeerConnected(!peerConnected, 'flex')}}></WaitingPeerCard>
            </VideoGrid>
        </VideoChatContainer>
    );
}
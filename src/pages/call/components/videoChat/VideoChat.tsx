import {useEffect, useRef, useState} from "react";
import {CallConnectionService} from "../../service/CallConnectionService";
import {ChatTimer} from "../common/ChatTimer";
import {CallInfo} from "../../../../model/Call";
import {VideoInfoCard} from "./VideoInfoCard";
import {NicknameText, VideoChatContainer, VideoGrid, VideoPlayer, VideoPlayerContainer } from "../../../../style/call/videoChat/VideoChatStyle";

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
                    <NicknameText>Gurmigou 🧍‍♂️ 😆 😊 </NicknameText>
                </VideoPlayerContainer>

                <VideoPlayerContainer>
                    <VideoPlayer style={{display: getDisplayOnPeerConnected(peerConnected)}}
                                 ref={videoPlayerUser2}
                                 autoPlay playsInline>
                    </VideoPlayer>
                    <VideoInfoCard message={'Your peer turned off camera ⛔📷'} circularProgress={false}
                                   style={{display: getDisplayOnPeerConnected(!peerConnected, 'flex')}}></VideoInfoCard>
                    <NicknameText>Your peer 👀 </NicknameText>
                </VideoPlayerContainer>
            </VideoGrid>
        </VideoChatContainer>
    );
}
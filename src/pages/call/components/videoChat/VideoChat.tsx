import {useEffect, useRef, useState} from "react";
import {CallConnectionService} from "../../service/CallConnectionService";
import {ChatTimer} from "../common/ChatTimer";
import {CallInfo} from "../../../../model/Call";
import {VideoInfoCard} from "./VideoInfoCard";
import {NicknameText, VideoChatContainer, VideoGrid, VideoPlayer, VideoPlayerContainer} from "../../../../style/call/videoChat/VideoChatStyle";

export const VideoChat = ({userId, roomId, cameraOn, peerCameraOn}: CallInfo) => {
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

    const getMyInfoCard = () => {
        if (!cameraOn)
            return <VideoInfoCard message={'You turned off your camera ⛔📷'} circularProgress={false}
                                  style={{display: 'flex'}}/>
    }

    const getPeerInfoCard = () => {
        if (!peerConnected)
            return <VideoInfoCard message={'Waiting for peer to join'} circularProgress={true}
                                  style={{display: 'flex'}}/>
        if (!peerCameraOn)
            return <VideoInfoCard message={'Your peer turned off camera ⛔📷'} circularProgress={false}
                                  style={{display: 'flex'}}/>
    }

    return (
        <VideoChatContainer>
            <ChatTimer startTimer={peerConnected}></ChatTimer>
            <VideoGrid>
                <VideoPlayerContainer>
                    <VideoPlayer ref={videoPlayerUser1}
                                 style={{display: (cameraOn) ? 'block' : 'none'}}
                                 autoPlay playsInline>
                    </VideoPlayer>
                    {getMyInfoCard()}
                    <NicknameText>Gurmigou 🧍‍♂️ 😆 😊 </NicknameText>
                </VideoPlayerContainer>

                <VideoPlayerContainer>
                    <VideoPlayer ref={videoPlayerUser2}
                                 style={{display: (peerConnected && peerCameraOn) ? 'block' : 'none'}}
                                 autoPlay playsInline/>
                    {getPeerInfoCard()}
                    <NicknameText>Your peer 👀 </NicknameText>
                </VideoPlayerContainer>
            </VideoGrid>
        </VideoChatContainer>
    );
}
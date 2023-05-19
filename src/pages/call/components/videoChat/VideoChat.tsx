import {useContext, useEffect, useRef, useState} from "react";
import {CallConnectionService} from "../../service/CallConnectionService";
import {ChatTimer} from "../common/ChatTimer";
import {CallInfo} from "../../../../model/Call";
import {VideoInfoCard} from "./VideoInfoCard";
import {NicknameText, VideoChatContainer, VideoGrid, VideoPlayer, VideoPlayerContainer} from "../../../../style/call/videoChat/VideoChatStyle";
import {SignalingContext} from "../../service/SignalingContext";

export const VideoChat = ({username, peerUsername, roomId, cameraOn, peerCameraOn, handleChatToPeer}: CallInfo) => {
    const [peerConnected, setPeerConnected] = useState<boolean>(false);

    const videoPlayerUser1 = useRef<HTMLVideoElement>(null);
    const videoPlayerUser2 = useRef<HTMLVideoElement>(null);
    let connected = false;

    const signalingClient = useContext(SignalingContext);

    useEffect(() => {
        if (!connected && videoPlayerUser1.current && videoPlayerUser2.current) {
            connected = true;
            const callConnection = new CallConnectionService(
                videoPlayerUser1.current,
                videoPlayerUser2.current);
            callConnection.initializeConnection(username, roomId, setPeerConnected, handleChatToPeer)
                .then(() => console.log('Connection initialized'));
        }
    }, [username]);

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
                    <NicknameText>{username} 🧍‍♂️ 😆 😊 </NicknameText>
                </VideoPlayerContainer>

                <VideoPlayerContainer>
                    <VideoPlayer ref={videoPlayerUser2}
                                 style={{display: (peerConnected && peerCameraOn) ? 'block' : 'none'}}
                                 autoPlay playsInline/>
                    {getPeerInfoCard()}
                    <NicknameText>{peerUsername} 👀 </NicknameText>
                </VideoPlayerContainer>
            </VideoGrid>
        </VideoChatContainer>
    );
}
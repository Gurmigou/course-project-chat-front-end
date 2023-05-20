import {useContext, useEffect, useRef, useState} from "react";
import {CallConnectionService} from "../../service/CallConnectionService";
import {ChatTimer} from "../common/ChatTimer";
import {CallInfo} from "../../../../model/Call";
import {VideoInfoCard} from "./VideoInfoCard";
import {NicknameText, VideoChatContainer, VideoGrid, VideoPlayer, VideoPlayerContainer} from "../../../../style/call/videoChat/VideoChatStyle";
import {SignalingContext} from "../../service/SignalingContext";
import {useNavigate} from "react-router-dom";

export const VideoChat = ({username, peerUsername, roomId, cameraOn, peerCameraOn, setConnectionService,
                              setPeerCameraOff, handleTimeout}: CallInfo) => {
    const navigate = useNavigate();

    const [peerConnected, setPeerConnected] = useState<boolean>(false);

    const videoPlayerUser1 = useRef<HTMLVideoElement>(null);
    const videoPlayerUser2 = useRef<HTMLVideoElement>(null);
    let connected = false;

    const signalingClient = useContext(SignalingContext);

    useEffect(() => {
        if (!connected && videoPlayerUser1.current && videoPlayerUser2.current && signalingClient) {
            connected = true;
            const callConnection = new CallConnectionService(
                videoPlayerUser1.current,
                videoPlayerUser2.current);
            callConnection.initializeConnection(username, roomId, signalingClient, setPeerConnected,
                                                setPeerCameraOff, () => navigate('/'))
                .then(() => console.log('Connection initialized'));
            setConnectionService(callConnection)
        }
    }, [username, signalingClient]);

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
            <ChatTimer startTimer={peerConnected} handleTimeout={handleTimeout}></ChatTimer>
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
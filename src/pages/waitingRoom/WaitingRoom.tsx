import {MainContainer} from "../../style/main/MainPageStyle";
import {LinearProgress} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import axios from "axios";
import {ChatRoom} from "../../model/Call";
import {useNavigate} from "react-router-dom";

export const WaitingRoom = () => {
    const navigate = useNavigate();
    
    React.useEffect(() => {
        joinChat();
    }, []);

    const joinChat = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8086/api/v1/chat/join-chat', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status >= 200 && response.status < 300) {
                const chatRoom: ChatRoom = response.data;
                navigate(`/room/${chatRoom.chatId}`, { state: { chatRoom } });
            }
        } catch (error) {
            console.error('Error while joining chat:', error);
        }
    };


    return (
        <MainContainer>
            <Box style={{
                maxWidth: '800px', margin: '0 auto', position: 'relative',
                top: '45%',
                transform: 'translateY(-50%)'
            }}>
                <LinearProgress/>
                <div style={{color: 'white', fontSize: '26px', margin: '3rem'}}>
                    Searching for a partner...
                </div>
            </Box>
        </MainContainer>
    );
}
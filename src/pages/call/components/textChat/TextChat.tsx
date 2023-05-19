import SendIcon from '@mui/icons-material/Send';
import {TextChatMessage} from "./TextChatMessage";
import {
    ChatInput,
    ChatMessage,
    ChatTextField,
    SendButton,
    TextChatContainer,
    TextChatWrapper
} from "../../../../style/call/textChat/TextChatStyle";
import {useCallback, useEffect, useState} from "react";
import {useContext} from 'react';
import {SignalingContext} from "../../service/SignalingContext";
import {ReceivedMessage, TextChatParams} from "../../../../model/Call";

export type Message = {
    message: string;
    date: Date;
    myMessage: boolean;
}

export const TextChat = ({open, roomId, username, peerUsername}: TextChatParams) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState<string>("");

    const signalingClient = useContext(SignalingContext);

    const getNewMessageObject = useCallback((message: string, author: string) => {
        return {
            message: message,
            date: new Date(),
            myMessage: username === author
        };
    }, [username]);

    useEffect(() => {
        if (signalingClient && signalingClient.getConnection()) {
            const connection = signalingClient.getConnection();

            const handleChatToPeer = (receivedMsg: ReceivedMessage) => {
                const newMessage = getNewMessageObject(receivedMsg.message, receivedMsg.from);
                setMessages(prevMessages => [...prevMessages, newMessage]);
            };

            connection?.on('chat_to_peer', handleChatToPeer);

            return () => {
                connection?.off('chat_to_peer', handleChatToPeer);
            };
        }
    }, [getNewMessageObject, signalingClient]);


    const handleSendMessage = () => {
        if (message === "") return;
        const newMessage = getNewMessageObject(message, username);
        setMessages([...messages, newMessage]);
        setMessage("");

        if (signalingClient && signalingClient.getConnection()) {
            const connection = signalingClient.getConnection();
            connection?.emit('chat_to_peer', username, roomId, message);
        }
    }

    return (
        <TextChatWrapper open={open} roomId={0} username={''} peerUsername={''}>
            <TextChatContainer>
                <ChatMessage>
                    {messages.map((message, index) => (
                        <TextChatMessage key={index} myMessage={message.myMessage}
                                         message={message.message} date={message.date}
                                         peerUsername={peerUsername}
                        />
                    ))}
                </ChatMessage>
                <ChatInput>
                    <ChatTextField InputLabelProps={{shrink: false}}
                                   InputProps={{style: {color: 'white', fontSize: '18px'}}}
                                   placeholder={'Type a message...'}
                                   value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                    />
                    <SendButton onClick={handleSendMessage}>
                        <SendIcon fontSize='small' style={{color: 'white'}}/>
                    </SendButton>
                </ChatInput>
            </TextChatContainer>
        </TextChatWrapper>
    );
};

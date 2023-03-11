import SendIcon from '@mui/icons-material/Send';
import {TextChatMessage} from "./TextChatMessage";
import {ChatInput, ChatMessage, ChatTextField, SendButton, TextChatContainer, TextChatParams, TextChatWrapper} from "../../../../style/call/textChat/TextChatStyle";
import {useState} from "react";

export type Message = {
    message: string;
    date: Date;
    myMessage: boolean;
}

export const TextChat = ({open}: TextChatParams) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState<string>("");

    const handleSendMessage = () => {
        if (message === "") return;
        const newMessage = {
            message: message,
            date: new Date(),
            myMessage: true
        }
        setMessages([...messages, newMessage]);
        setMessage("");
    }

    return (
        <TextChatWrapper open={open}>
            <TextChatContainer>
                <ChatMessage>
                    {messages.map((message, index) => (
                        <TextChatMessage key={index} myMessage={true} message={message.message} date={message.date}/>
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

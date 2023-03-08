import {styled} from "@mui/material";

type TextChatMessageProps = {
    message: string;
    myMessage: boolean;
}

const TextChatMessageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '0.8rem',
});

const MessageInfoContainer = styled('div')<TextChatMessageProps>(({myMessage}) => ({
    display: 'flex',
    color: '#e7e7e7',
    fontSize: '0.8rem',
    fontWeight: "lighter",
    marginBottom: "0.4rem",
    alignSelf: myMessage ? 'flex-start' : 'flex-end',
}));

const UserNameInfo = styled('div')({
    marginLeft: '0.5rem',
});

const ChatMessage = styled('p')<TextChatMessageProps>(({myMessage}) => ({
    display: 'inline-block',
    maxWidth: '80%',
    width: 'fit-content',
    alignSelf: myMessage ? 'flex-start' : 'flex-end',
    clear: 'both',
    padding: '0.5rem',
    borderRadius: '5px',
    background: myMessage ? '#623ac7' : '#495C83',
    color: 'white',
    textWrap: 'wrap',
    breakWord: 'break-word',
    textAlign: myMessage ? 'left' : 'right',
    lineHeight: '1.5rem',
}));

export const TextChatMessage = ({message, myMessage}: TextChatMessageProps) => {
    return (
        <TextChatMessageContainer>
            <MessageInfoContainer myMessage={myMessage} message={""}>
                {new Date().toLocaleTimeString().substring(0, 5)}
                <UserNameInfo>
                    {myMessage ? 'You' : 'Other'}
                </UserNameInfo>
            </MessageInfoContainer>
            <ChatMessage message={message} myMessage={myMessage}>
                {message}
            </ChatMessage>
        </TextChatMessageContainer>
    )
}
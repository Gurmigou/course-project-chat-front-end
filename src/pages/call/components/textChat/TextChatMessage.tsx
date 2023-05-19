import {ChatMessage, MessageInfoContainer, TextChatMessageContainer, UserNameInfo} from "../../../../style/call/textChat/TextChatMessageStyle";
import {Message} from "./TextChat";

export const TextChatMessage = ({message, date, myMessage, peerUsername }: Message & { peerUsername: string }) => {
    return (
        <TextChatMessageContainer>
            <MessageInfoContainer myMessage={myMessage} message={""} date={date}>
                {date.toLocaleTimeString().substring(0, 5)}
                <UserNameInfo>
                    {myMessage ? 'You' : peerUsername}
                </UserNameInfo>
            </MessageInfoContainer>
            <ChatMessage message={message} myMessage={myMessage} date={date}>
                {message}
            </ChatMessage>
        </TextChatMessageContainer>
    )
}
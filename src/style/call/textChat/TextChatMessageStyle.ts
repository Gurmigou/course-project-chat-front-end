import {styled} from "@mui/material";
import {Message} from "../../../pages/call/components/textChat/TextChat";

export const TextChatMessageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '0.8rem',
});

export const MessageInfoContainer = styled('div')<Message>(({myMessage}) => ({
    display: 'flex',
    color: '#e7e7e7',
    fontSize: '0.8rem',
    fontWeight: "lighter",
    marginBottom: "0.4rem",
    alignSelf: myMessage ? 'flex-start' : 'flex-end',
}));

export const UserNameInfo = styled('div')({
    marginLeft: '0.5rem',
});

export const ChatMessage = styled('p')<Message>(({myMessage}) => ({
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
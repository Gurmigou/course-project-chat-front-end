import {Fab, styled, TextField} from "@mui/material";
import {Colors} from "../../../assets/Colors";

export type TextChatParams = {
    open: boolean;
};

export const TextChatWrapper = styled("div")<TextChatParams>(({open}) => ({
    margin: "1.5rem",
    width: "40rem",
    background: Colors.color3,
    display: open ? "block" : "none",
    position: "relative",
    borderRadius: "5px",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
}));

export const TextChatContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    height: "100%",
});

export const ChatMessage = styled("div")({
    height: "100%",
    margin: "1rem",
    borderRadius: "5px",
    background: Colors.color4,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflowY: "scroll",
});

export const ChatInput = styled("div")({
    display: "flex",
    height: "4rem",
    margin: "1rem",
    borderRadius: "5px",
    background: Colors.color4,
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
});

export const SendButton = styled(Fab)({
    height: "2rem",
    width: "2.2rem",
    margin: "0 1rem",
    background: '#623ac7',
    '&:hover': {
        background: '#7856d0',
    },
})

export const ChatTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderWidth: 0,
        },
        '&:hover fieldset': {
            borderWidth: 0,
        },
        '&.Mui-focused fieldset': {
            borderWidth: 0,
        },
    },
    width: "80%",
})
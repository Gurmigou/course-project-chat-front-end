import {styled} from "@mui/material";
import {CSSProperties} from "react";

export const ChatTimerContainer = styled('div')({
    marginTop: "0.5rem",
    marginBottom: "2.5rem"
});

export const TimerTitle = styled('p')({
    color: 'white',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '1.5rem'
});

export const linearProgressStyle: CSSProperties = {
    marginBottom: "20px",
    height: "0.5rem",
    borderRadius: "5px",
    background: 'white',
};

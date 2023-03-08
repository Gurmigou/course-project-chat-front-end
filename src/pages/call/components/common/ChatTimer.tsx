import {LinearProgress, styled} from "@mui/material";
import {CSSProperties, useEffect, useState} from "react";

type ChatTimerProps = {
    startTimer: boolean;
}

const ChatTimerContainer = styled('div')({
    marginTop: "0.5rem",
    marginBottom: "2.5rem"
});

const linearProgressStyle: CSSProperties = {
    marginBottom: "20px",
    height: "0.5rem",
    borderRadius: "5px",
    background: 'white',
}

const TimerTitle = styled('p')({
    color: 'white',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '1.5rem'
});


export const ChatTimer = ({startTimer}: ChatTimerProps) => {
    const [progress, setProgress] = useState(100);
    const [timeRemaining, setTimeRemaining] = useState("05:00");
    const duration = 300000; // 5 minutes in milliseconds
    const interval = 50; // update interval in milliseconds

    useEffect(() => {
        if (!startTimer) return;

        let elapsedTime = 0;
        const timer = setInterval(() => {
            elapsedTime += interval;
            setProgress(Math.max(0, 100 - (elapsedTime / duration) * 100));

            const minutes = Math.floor((duration - elapsedTime) / 60000);
            const seconds = Math.floor((duration - elapsedTime) % 60000 / 1000);
            setTimeRemaining(`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);

            if (elapsedTime >= duration) {
                clearInterval(timer);
            }
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [startTimer]);

    return (
        <ChatTimerContainer>
            <TimerTitle>{timeRemaining}</TimerTitle>
            <LinearProgress variant="determinate" value={progress} style={linearProgressStyle}/>
        </ChatTimerContainer>
    );
};
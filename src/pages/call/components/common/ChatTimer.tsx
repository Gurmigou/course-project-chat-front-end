import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {ChatTimerContainer, linearProgressStyle, TimerTitle} from "../../../../style/call/common/ChatTimerStyle";

type ChatTimerProps = {
    startTimer: boolean;
}

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
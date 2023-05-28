import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {ChatTimerContainer, linearProgressStyle, TimerTitle} from "../../../../style/call/common/ChatTimerStyle";
import {ChatTimerProps} from "../../../../model/user/CommonUser";

export const ChatTimer = ({startTimer, handleTimeout}: ChatTimerProps) => {
    const [progress, setProgress] = useState(100);
    const [timeRemaining, setTimeRemaining] = useState("05:00");
    const [initialTimestamp, setInitialTimestamp] = useState<number | null>(null);
    const duration = 300000; // 5 minutes in milliseconds
    const interval = 50; // update interval in milliseconds

    const timerProcess = (storedTimestampNumber: number, savedElapsedMillisecondsNumber: number): number => {
        const elapsedMilliseconds = Date.now() - storedTimestampNumber + savedElapsedMillisecondsNumber;
        const elapsedTime = Math.min(elapsedMilliseconds, duration);
        const remainingMilliseconds = Math.max(duration - elapsedTime, 0);

        setProgress(Math.max(0, (remainingMilliseconds / duration) * 100));

        const minutes = Math.floor(remainingMilliseconds / 60000);
        const seconds = Math.floor((remainingMilliseconds % 60000) / 1000);
        setTimeRemaining(`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
        return elapsedTime;
    }

    useEffect(() => {
        const storedTimestamp = window.localStorage.getItem("chatTimerTimestamp");
        const savedElapsedMilliseconds = window.localStorage.getItem("chatTimerElapsed");

        if (storedTimestamp && savedElapsedMilliseconds) {
            const storedTimestampNumber = parseInt(storedTimestamp, 10);
            const savedElapsedMillisecondsNumber = parseInt(savedElapsedMilliseconds, 10);

            timerProcess(storedTimestampNumber, savedElapsedMillisecondsNumber);
        }

        if (startTimer && !initialTimestamp) {
            const timestamp = Date.now();
            setInitialTimestamp(timestamp);
            window.localStorage.setItem("chatTimerTimestamp", String(timestamp));
        }

        const intervalId = setInterval(() => {
            if (initialTimestamp) {
                const elapsedTime = timerProcess(initialTimestamp, 0)
                window.localStorage.setItem("chatTimerElapsed", String(elapsedTime));

                if (elapsedTime >= duration) {
                    clearInterval(intervalId);
                    window.localStorage.removeItem("chatTimerTimestamp");
                    window.localStorage.removeItem("chatTimerElapsed");

                    handleTimeout();
                }
            }

        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [startTimer, initialTimestamp]);

    return (
        <ChatTimerContainer>
            <TimerTitle>{timeRemaining}</TimerTitle>
            <LinearProgress variant="determinate" value={progress} style={linearProgressStyle}/>
        </ChatTimerContainer>
    );
};

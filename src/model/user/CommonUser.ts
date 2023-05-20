export const InterestsValues: Interest[] = [
    {title: 'Sport', id: 1},
    {title: 'Music', id: 2},
    {title: 'Games', id: 3},
    {title: 'Movies', id: 4},
    {title: 'Books', id: 5},
    {title: 'Art', id: 6},
    {title: 'Food', id: 7},
    {title: 'Travel', id: 8},
    {title: 'Fashion', id: 9},
    {title: 'Science', id: 10},
    {title: 'Technology', id: 11},
    {title: 'Nature', id: 12},
    {title: 'Animals', id: 13},
    {title: 'History', id: 14},
    {title: 'Politics', id: 15},
]

export type Interest = {
    title: string,
    id: number,
}

export type UserStatsCardProps = {
    firstPeerName: string,
    secondPeerName: string,
    duration: string,
    date: Date,
}

export type ChatControlButtonsProps = {
    micOff: boolean;
    videoOff: boolean;
    handleMicroToggle: () => void;
    handleVideoToggle: () => void;
    handleLeaveCall: () => void;
    handleChatOpen: () => void;
    handleNextPeer: () => void;
}

export type ChatTimerProps = {
    startTimer: boolean;
    handleTimeout: () => void;
};
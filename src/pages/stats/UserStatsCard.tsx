import {CallDate, Duration, PeersName, UserStatsCallInfo, UserStatsCardContainer} from "../../style/stats/UserStatsCardStyle";

type UserStatsCardProps = {
    peerName: string,
    duration: string,
    date: Date,
}

export const UserStatsCard = ({peerName, duration, date}: UserStatsCardProps) => {
    const myName = "Gurmigou";

    return (
        <UserStatsCardContainer>
            <UserStatsCallInfo>
                <PeersName>{`${myName}  📞  ${peerName}`}</PeersName>
                <Duration>{`Duration: ${duration}`}</Duration>
            </UserStatsCallInfo>
            <CallDate>
                {date.toDateString()}
            </CallDate>
        </UserStatsCardContainer>
    );
}
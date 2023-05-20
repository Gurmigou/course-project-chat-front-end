import {CallDate, Duration, PeersName, UserStatsCallInfo, UserStatsCardContainer} from "../../style/stats/UserStatsCardStyle";
import {UserStatsCardProps} from "../../model/user/CommonUser";

export const UserStatsCard = ({ firstPeerName, secondPeerName, duration, date, myName}: UserStatsCardProps & {myName: string} ) => {
    return (
        <UserStatsCardContainer>
            <UserStatsCallInfo>
                <PeersName>{`${myName === firstPeerName ? firstPeerName : secondPeerName}  📞  ${myName !== firstPeerName ? firstPeerName : secondPeerName}`}</PeersName>
                <Duration>{`Duration: ${duration}`}</Duration>
            </UserStatsCallInfo>
            <CallDate>
                {String(date)}
            </CallDate>
        </UserStatsCardContainer>
    );
}
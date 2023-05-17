import {NavHeader} from "../../components/NavHeader";
import {StatsContainer, StatsHeader, StatsWrapper} from "../../style/stats/StatsStyle";
import {UserStatsCard} from "./UserStatsCard";

export const UserStats = () => {
    return (
        <StatsWrapper>
            <NavHeader/>
            <StatsContainer>
                <StatsHeader>A list of your talks</StatsHeader>
                <UserStatsCard peerName={"Alex"} date={new Date()} duration={"4:35"}></UserStatsCard>
                <UserStatsCard peerName={"Alex"} date={new Date()} duration={"4:35"}></UserStatsCard>
                <UserStatsCard peerName={"Alex"} date={new Date()} duration={"4:35"}></UserStatsCard>
                <UserStatsCard peerName={"Alex"} date={new Date()} duration={"4:35"}></UserStatsCard>
                <UserStatsCard peerName={"Alex"} date={new Date()} duration={"4:35"}></UserStatsCard>
            </StatsContainer>
        </StatsWrapper>
    );
}
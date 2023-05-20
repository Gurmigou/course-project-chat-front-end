import {NavHeader} from "../../components/NavHeader";
import {StatsContainer, StatsHeader, StatsWrapper} from "../../style/stats/StatsStyle";
import {UserStatsCard} from "./UserStatsCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {UserStatsCardProps} from "../../model/user/CommonUser";

export const UserStats = () => {
    const [stats, setStats] = useState<UserStatsCardProps[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8085/api/v1/talk/all', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setStats(response.data)
        });
    }, [])

    return (
        <StatsWrapper>
            <NavHeader/>
            <StatsContainer>
                <StatsHeader>A list of your talks</StatsHeader>
                {stats.map((stat) => {
                    return <UserStatsCard firstPeerName={stat.firstPeerName} secondPeerName={stat.secondPeerName}
                                          date={stat.date} duration={stat.duration}
                                          myName={localStorage.getItem('username')!}
                                          key={stat.firstPeerName + stat.date + stat.duration}></UserStatsCard>
                })
                }
            </StatsContainer>
        </StatsWrapper>
    );
}
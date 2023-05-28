import {NavLink} from "react-router-dom";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import {Header, LogoContainer, TopLeftLogo, TopRightLogo} from "../style/components/NavHeaderStyle";

export const NavHeader = () => {
    return (
        <Header>
            <TopLeftLogo>
                <LogoContainer>
                    <NavLink to={'/'}>
                        <VideoCameraBackIcon style={{fontSize: 35, color: 'white'}}></VideoCameraBackIcon>
                    </NavLink>
                </LogoContainer>
                <p style={{color: 'white'}}>Snap Meet</p>
            </TopLeftLogo>
            <TopRightLogo>
                <NavLink to={'/stats'}>
                    <ListAltIcon style={{fontSize: 35, color: 'white'}}/>
                </NavLink>
                <NavLink to={'/user'}>
                    <AccountCircleIcon style={{fontSize: 35, color: 'white'}}/>
                </NavLink>
            </TopRightLogo>
        </Header>
    )
}
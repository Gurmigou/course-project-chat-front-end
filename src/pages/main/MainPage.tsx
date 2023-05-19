import React from 'react';
import {NavLink} from "react-router-dom";
import {NavHeader} from "../../components/NavHeader";
import {JoinChatButton, MainContainer, MainContent} from '../../style/main/MainPageStyle';

export const MainPage = () => {
    return (
        <MainContainer>
            <MainContent>
                <NavHeader/>
                <JoinChatButton variant="contained">
                    <NavLink to={'/waiting-room'} style={{textDecoration: 'none', color: 'white'}}>Join chat</NavLink>
                </JoinChatButton>
            </MainContent>
        </MainContainer>
    );
};
import React from 'react';
import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import {Colors} from "../../assets/Colors";
import {NavLink} from "react-router-dom";
import {NavHeader} from "../../components/NavHeader";

const MainContainer = styled("div")({
    height: '100vh',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)'
})

const MainContent = styled("div")({
    maxWidth: '100%',
    margin: '0 auto',
});

const JoinChatButton = styled(Button)({
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '1.5rem 4rem',
    borderRadius: '2rem',
    background: Colors.color6,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
})

export const MainPage = () => {
    return (
        <MainContainer>
            <MainContent>
                <NavHeader/>
                <JoinChatButton variant="contained">
                    <NavLink to={'/room'} style={{textDecoration: 'none', color: 'white'}}>Join chat</NavLink>
                </JoinChatButton>
            </MainContent>
        </MainContainer>
    );
};
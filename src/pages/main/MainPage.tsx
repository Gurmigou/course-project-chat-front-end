import React from 'react';
import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {Colors} from "../../assets/Colors";

const MainContainer = styled("div")({
    height: '100vh',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)'
})

const MainContent = styled("div")({
    maxWidth: '90%',
    margin: '0 auto',
});

const TopLeftLogo = styled("div")({
    marginTop: '1rem',
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
});

const TopRightLogo = styled("div")({
    marginTop: '1rem',
    marginRight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '0.5rem',
    borderRadius: '10px',
});

const Header = styled("div")({
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const LogoContainer = styled("div")({
    padding: '1rem',
    background: Colors.color5,
    borderRadius: '20px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)'
})

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
                <Header>
                    <TopLeftLogo>
                        <LogoContainer>
                            <VideoCameraBackIcon style={{fontSize: 35, color: 'white'}}></VideoCameraBackIcon>
                        </LogoContainer>
                        <p style={{color: 'white'}}>Quick chat</p>
                    </TopLeftLogo>
                    <TopRightLogo>
                        <ListAltIcon style={{fontSize: 35, color: 'white'}}></ListAltIcon>
                        <AccountCircleIcon style={{fontSize: 35, color: 'white'}}></AccountCircleIcon>
                    </TopRightLogo>
                </Header>
                <JoinChatButton variant="contained">
                    Join chat
                </JoinChatButton>
            </MainContent>
        </MainContainer>
    );
};
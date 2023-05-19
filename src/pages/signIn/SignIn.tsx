import * as React from 'react';
import {FormEvent} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import {Colors} from "../../assets/Colors";
import {SignInContainer, SignInFooter, SignInTextField} from '../../style/signIn/SignInStyle';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/yehor-bukhanets-b4421b217/">
                IPS-31 Yehor Bukhanets Course Work
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const login: Login = {
            username: data.get('username') as string,
            password: data.get('password') as string,
        };

        axios.post('http://localhost:8085/api/v1/security/login', login)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/');
                }
            })
    };

    return (
        <SignInContainer>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: Colors.color3}}>
                        <NavLink to={'/'} style={{color: 'white'}}>
                            <VideoChatIcon/>
                        </NavLink>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <SignInTextField margin="normal" required fullWidth id="username"
                                         label="Username" name="username" autoFocus
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <SignInTextField margin="normal" required fullWidth name="password"
                                         label="Password" type="password" id="password"
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                bgcolor: Colors.color1,
                                '&:hover': {
                                    bgcolor: Colors.color3,
                                },
                                '&:active': {
                                    bgcolor: Colors.color2,
                                },
                            }}
                        >
                            Sign In
                        </Button>
                        <SignInFooter>
                            <Link href="#" variant="body2" style={{color: Colors.color1, textDecoration: 'none'}}>
                                Forgot password?
                            </Link>
                            <NavLink to={'/sign-up'}
                                     style={{color: Colors.color1, fontSize: '14px', textDecoration: 'none'}}>
                                {"Don't have an account? Sign Up"}
                            </NavLink>
                        </SignInFooter>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </SignInContainer>
    );
}
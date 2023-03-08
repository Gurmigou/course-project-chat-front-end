import * as React from 'react';
import {FormEvent} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import {styled} from "@mui/material";
import {Colors} from "../../assets/Colors";

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

const SignInContainer = styled("div")({});

const SignInTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            color: Colors.color4,
        },
        '&:hover fieldset': {
            borderColor: Colors.color4,
        },
        '&.Mui-focused fieldset': {
            borderColor: Colors.color4,
        },
    },
});

export const SignIn = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
                        <VideoChatIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <SignInTextField margin="normal" required fullWidth id="email"
                                         label="Email Address" name="email" autoComplete="email" autoFocus
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <SignInTextField margin="normal" required fullWidth name="password"
                                         label="Password" type="password" id="password"
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <FormControlLabel label="Remember me"
                                          control={<Checkbox value="remember" sx={{
                                              color: Colors.color1,
                                              '&.Mui-checked': {
                                                  color: Colors.color2,
                                              },
                                          }}/>}/>
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
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" style={{color: Colors.color1, textDecoration: 'none'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link href="#" variant="body2" style={{color: Colors.color1, textDecoration: 'none'}}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </SignInContainer>
    );
}
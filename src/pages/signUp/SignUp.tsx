import * as React from 'react';
import {FormEvent} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import {Alert, AlertTitle, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Colors} from "../../assets/Colors";
import {SignUpAutocomplete, SignUpContainer, SignUpFormControl, SignUpTextField} from '../../style/signUp/SignUpStyle';
import {NavLink, useNavigate} from "react-router-dom";
import {interests} from "../../model/user/CommonUser";
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

export const SignUp = () => {
    const navigate = useNavigate();

    const [myGender, setMyGender] = React.useState<string>('');
    const [wantChatGender, setWantChatGender] = React.useState<string>('');
    const [selectedInterests, setSelectedInterests] = React.useState<string[]>([]);

    const [error, setError] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string>('');

    React.useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [error]);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const register: Register = {
            username: data.get('username') as string,
            password: data.get('password') as string,
            myGender: myGender,
            genderPreference: wantChatGender,
            interests: selectedInterests,
        };

        setError(false);

        axios.post('http://localhost:8085/api/v1/security/register', register)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    navigate('/sign-in');
                }
            }).catch(error => {
                setError(true);
                setErrorMessage(error.response.data.message);
            })
    };

    const handeMyGenderChange = (event: SelectChangeEvent) => {
        setMyGender(event.target.value);
    }

    const handleWantChatGenderChange = (event: SelectChangeEvent) => {
        setWantChatGender(event.target.value);
    };

    const handleInterestsChange = (event: any, value: any) => {
        setSelectedInterests(value.map((interest: any) => interest.title));
    };


    return (
        <SignUpContainer>
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
                    {error && (
                        <Alert style={{position: 'absolute', top: 0, right: 0, margin: '1rem'}} severity="error" sx={{mt: 2}}>
                            {!!errorMessage ? errorMessage : 'An error happened while signing up!'}
                        </Alert>
                    )}
                    <Avatar sx={{m: 1, bgcolor: Colors.color3}}>
                        <NavLink to={'/'} style={{color: 'white'}}>
                            <VideoChatIcon/>
                        </NavLink>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <SignUpTextField margin="normal" required fullWidth id="username"
                                         label="Username" name="username" autoComplete="username" autoFocus
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <SignUpTextField margin="normal" required fullWidth name="password"
                                         label="Password" type="password" id="password"
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <SignUpFormControl sx={{width: '100%', marginTop: '30px'}} required>
                            <InputLabel id="demo-select-small">Select gender</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={myGender}
                                label="Select gender"
                                onChange={handeMyGenderChange}
                                style={{textAlign: 'left'}}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                                <MenuItem value={3}>I don't want to tell</MenuItem>
                            </Select>
                        </SignUpFormControl>
                        <SignUpFormControl sx={{width: '100%', marginTop: '30px'}} required>
                            <InputLabel id="demo-select-small">With whom you want to chat</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={wantChatGender}
                                label="With whom you want to chat?"
                                onChange={handleWantChatGenderChange}
                                style={{textAlign: 'left'}}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                                <MenuItem value={3}>No matter</MenuItem>
                            </Select>
                        </SignUpFormControl>
                        <SignUpAutocomplete style={{margin: '10px 0'}}
                                            multiple
                                            onChange={handleInterestsChange}
                                            id="tags-standard"
                                            options={interests}
                                            getOptionLabel={(option: any) => option.title}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                    label="Select your interests"
                                                    placeholder="Favorites"
                                                />
                                            )}
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
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <NavLink to={'/sign-in'}
                                         style={{color: Colors.color1, fontSize: '14px', textDecoration: 'none'}}>
                                    {"Already have an account? Sign in"}
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </SignUpContainer>
    );
}
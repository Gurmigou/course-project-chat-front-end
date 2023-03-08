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
import {Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled} from "@mui/material";
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

const SignUpContainer = styled("div")({});

const SignUpTextField = styled(TextField)({
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

export const SignUp = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const interests = [
        {title: 'Sport', id: 1},
        {title: 'Music', id: 2},
        {title: 'Games', id: 3},
        {title: 'Movies', id: 4},
        {title: 'Books', id: 5},
        {title: 'Art', id: 6},
        {title: 'Food', id: 7},
        {title: 'Travel', id: 8},
        {title: 'Fashion', id: 9},
        {title: 'Science', id: 10},
        {title: 'Technology', id: 11},
        {title: 'Nature', id: 12},
        {title: 'Animals', id: 13},
        {title: 'History', id: 14},
        {title: 'Politics', id: 15},
    ]

    const [myGender, setMyGender] = React.useState<string>('');
    const [gender, setGender] = React.useState<string>('');

    const handeMyGenderChange = (event: SelectChangeEvent) => {
        setMyGender(event.target.value);
    }

    const handleGenderChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
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
                    <Avatar sx={{m: 1, bgcolor: Colors.color3}}>
                        <VideoChatIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <SignUpTextField margin="normal" required fullWidth id="email"
                                         label="Nickname" name="nickname" autoComplete="nickname" autoFocus
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <SignUpTextField margin="normal" required fullWidth name="password"
                                         label="Password" type="password" id="password"
                                         InputLabelProps={{style: {color: Colors.color3}}}
                        />
                        <FormControl sx={{ width: '100%', marginTop: '30px' }} required>
                            <InputLabel id="demo-select-small">Select gender</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={gender}
                                label="Select gender"
                                onChange={handeMyGenderChange}
                                style={{textAlign: 'left'}}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                                <MenuItem value={3}>I don't want to tell</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '100%', marginTop: '10px' }}>
                            <InputLabel id="demo-select-small">With whom you want to chat</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={gender}
                                label="With whom you want to chat?"
                                onChange={handleGenderChange}
                                style={{textAlign: 'left'}}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                                <MenuItem value={3}>No matter</MenuItem>
                            </Select>
                        </FormControl>
                        <Autocomplete style={{ margin: '10px 0' }}
                            multiple
                            id="tags-standard"
                            options={interests}
                            getOptionLabel={(option) => option.title}
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
                                <Link href="#" variant="body2" style={{color: Colors.color1, textDecoration: 'none'}}>
                                    {"Already have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </SignUpContainer>
    );
}
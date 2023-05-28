import {NavHeader} from "../../components/NavHeader";
import {Greeting, UserAutocomplete, UserCabinetContainer, UserCabinetWrapper, UserFormControl,} from "../../style/user/UserStyle";
import {Colors} from "../../assets/Colors";
import {Alert, Box, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import {FormEvent, useEffect} from "react";
import axios from "axios";
import {InterestsValues} from "../../model/user/CommonUser";
import {UpdateUser} from "../../model/security/Security";

export const UserCabinet = () => {
    const [success, setSuccess] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    const [myGender, setMyGender] = React.useState<string>('');
    const [wantChatGender, setWantChatGender] = React.useState<string>('');
    const [interests, setInterests] = React.useState<string[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8085/api/v1/user?username=' + localStorage.getItem('username'))
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    const {myGender, wantChatGender} = response.data;

                    if (myGender !== undefined) {
                        setMyGender(myGender);
                    } else {
                        setMyGender('');
                    }

                    if (wantChatGender !== undefined) {
                        setWantChatGender(wantChatGender);
                    } else {
                        setWantChatGender('');
                    }
                }
            })
    }, [])

    React.useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    React.useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [success]);


    const handleMyGenderChange = (event: SelectChangeEvent) => {
        setMyGender(event.target.value);
    }

    const handleWantChatGenderChange = (event: SelectChangeEvent) => {
        setWantChatGender(event.target.value);
    };

    const getGreeting = (): string => {
        return `Welcome, ${localStorage.getItem('username')} 👋`;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSuccess(false);
        setError(false);

        const updatedUserCabinetData: UpdateUser = {
            myGender: Number(myGender) - 1,
            genderPreference: Number(wantChatGender) - 1,
            interests: interests
        };

        const token = localStorage.getItem('token');
        axios.put('http://localhost:8085/api/v1/user', updatedUserCabinetData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    setSuccess(true);
                }
            })
            .catch(error => {
                setError(true)
            });
    }

    const handleInterestsChange = (event: any, value: any) => {
        setInterests(value.map((interest: any) => interest.title));
    };

    return (
        <UserCabinetWrapper>
            <NavHeader/>

            <UserCabinetContainer>
                {error && (
                    <Alert style={{position: 'absolute', top: 0, right: 0, margin: '1rem'}} severity="error" sx={{mt: 2}}>
                        Update failed
                    </Alert>
                )}
                {success && (
                    <Alert style={{position: 'absolute', top: 0, right: 0, margin: '1rem'}} severity="success" sx={{mt: 2}}>
                        Updated successfully
                    </Alert>
                )}

                <Greeting>{getGreeting()}</Greeting>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}
                     style={{maxWidth: '720px', margin: '0 auto'}}>
                    <UserFormControl sx={{width: '100%', marginTop: '30px'}} required>
                        <InputLabel id="demo-select-small" sx={{color: Colors.color7}}>Select gender</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={myGender}
                            label="Select gender"
                            onChange={handleMyGenderChange}
                            style={{textAlign: 'left'}}
                            sx={{
                                color: "white",
                                '& .MuiSelect-icon': {color: "white"}
                            }}
                        >
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'I don\'t want to tell'}>I don't want to tell</MenuItem>
                        </Select>
                    </UserFormControl>
                    <UserFormControl sx={{width: '100%', marginTop: '30px'}} required>
                        <InputLabel id="demo-select-small" sx={{color: Colors.color7}}>
                            With whom you want to chat
                        </InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={wantChatGender}
                            label="With whom you want to chat?"
                            onChange={handleWantChatGenderChange}
                            style={{textAlign: 'left'}}
                            sx={{
                                color: "white",
                                '& .MuiSelect-icon': {color: "white"}
                            }}
                        >
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'No matter'}>No matter</MenuItem>
                        </Select>
                    </UserFormControl>
                    <UserAutocomplete
                        style={{margin: '20px 0', borderColor: 'red'}}
                        multiple
                        id="tags-standard"
                        options={InterestsValues}
                        getOptionLabel={(option: any) => option.title}
                        defaultValue={InterestsValues.filter(interest => interests.includes(interest.title))}
                        value={InterestsValues.filter(interest => interests.includes(interest.title))}
                        onChange={handleInterestsChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Select your interests"
                                placeholder="Favorites"
                                InputLabelProps={{style: {color: Colors.color7, fontSize: '18px'}}}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" style={{width: '20%'}}
                            sx={{
                                mt: 3,
                                mb: 2,
                                bgcolor: Colors.color5,
                                '&:hover': {
                                    bgcolor: Colors.color6,
                                },
                                '&:active': {
                                    bgcolor: Colors.color6,
                                },
                            }}
                    >
                        Save
                    </Button>
                </Box>
            </UserCabinetContainer>
        </UserCabinetWrapper>
    )
}

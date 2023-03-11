import {NavHeader} from "../../components/NavHeader";
import {
    Greeting,
    UserAutocomplete,
    UserCabinetContainer,
    UserCabinetWrapper,
    UserFormControl,
    UserTextField
} from "../../style/user/UserStyle";
import {Colors} from "../../assets/Colors";
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import {interests} from "../../model/user/CommonUser";

export const UserCabinet = () => {
    const [myGender, setMyGender] = React.useState<string>('');
    const [wantChatGender, setWantChatGender] = React.useState<string>('');

    const handeMyGenderChange = (event: SelectChangeEvent) => {
        setMyGender(event.target.value);
    }

    const handleWantChatGenderChange = (event: SelectChangeEvent) => {
        setWantChatGender(event.target.value);
    };

    function handleSubmit() {

    }

    return (
        <UserCabinetWrapper>
            <NavHeader/>
            <UserCabinetContainer>
                <Greeting>Welcome, Nickname 👋</Greeting>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}
                     style={{maxWidth: '720px', margin: '0 auto'}}>
                    <UserTextField margin="normal" required fullWidth id="email"
                                   label="Nickname" name="nickname" autoComplete="nickname" autoFocus
                                   InputLabelProps={{style: {color: Colors.color7}}}
                                   InputProps={{sx: {color: "white"}}}
                    />
                    <UserTextField margin="normal" required fullWidth name="password"
                                   label="Password" type="password" id="password"
                                   InputLabelProps={{style: {color: Colors.color7}}}
                                   InputProps={{sx: {color: "white"}}}
                    />
                    <UserFormControl sx={{width: '100%', marginTop: '30px'}} required>
                        <InputLabel id="demo-select-small" sx={{color: Colors.color7}}>Select gender</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={myGender}
                            label="Select gender"
                            onChange={handeMyGenderChange}
                            style={{textAlign: 'left'}}
                            sx={{
                                color: "white",
                                '& .MuiSelect-icon': {color: "white"}
                            }}
                        >
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Female</MenuItem>
                            <MenuItem value={3}>I don't want to tell</MenuItem>
                        </Select>
                    </UserFormControl>
                    <UserFormControl sx={{width: '100%', marginTop: '30px'}} required>
                        <InputLabel id="demo-select-small" sx={{color: Colors.color7}}>With whom you want to
                            chat</InputLabel>
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
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Female</MenuItem>
                            <MenuItem value={3}>No matter</MenuItem>
                        </Select>
                    </UserFormControl>
                    <UserAutocomplete style={{margin: '20px 0'}}
                                      multiple
                                      id="tags-standard"
                                      options={interests}
                                      getOptionLabel={(option: any) => option.title}
                                      renderInput={(params) => (
                                          <TextField
                                              {...params}
                                              variant="standard"
                                              label="Select your interests"
                                              placeholder="Favorites"
                                              InputLabelProps={{style: {color: Colors.color7, fontSize: '18px'}}}
                                              InputProps={{style: {color: Colors.color7}}}
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
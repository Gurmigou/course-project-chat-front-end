import {Autocomplete, FormControl, styled} from "@mui/material";
import {Colors} from "../../assets/Colors";
import TextField from "@mui/material/TextField";

export const UserCabinetWrapper = styled("div")({
    backgroundColor: Colors.color3,
    height: '100%',
});

export const UserCabinetContainer = styled("div")({
    maxWidth: '1120px',
    margin: '0 auto',
});

export const Greeting = styled("div")({
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    margin: '2rem 0',
});

export const UserTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colors.color5,
        },
        '&:hover fieldset': {
            borderColor: Colors.color6,
        },
        '&.Mui-focused fieldset': {
            borderColor: Colors.color5,
        },
    },
});

export const UserFormControl = styled(FormControl)({
    '& label.Mui-focused': {
        color: Colors.color7,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: Colors.color7,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colors.color5,
        },
        '&:hover fieldset': {
            borderColor: Colors.color6,
        },
        '&.Mui-focused fieldset': {
            borderColor: Colors.color5,
        },
    },
});

export const UserAutocomplete = styled(Autocomplete)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colors.color5,
        },
        '&:hover fieldset': {
            borderColor: Colors.color6,
        },
        '&.Mui-focused fieldset': {
            borderColor: Colors.color5,
        }},
    '& label.Mui-focused': {
        color: Colors.color7,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: Colors.color5,
    },
    '& .MuiAutocomplete-tag': {
        backgroundColor: Colors.color6, // change the background color of the selected option
        color: '#fff', // change the text color of the selected option
    },
    '& .MuiAutocomplete-inputRoot': {
        '& .MuiAutocomplete-input': {
            color: 'white',
        },
    },
});
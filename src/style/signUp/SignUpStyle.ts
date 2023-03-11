import {Autocomplete, FormControl, styled} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Colors} from "../../assets/Colors";

export const SignUpContainer = styled("div")({});

export const SignUpTextField = styled(TextField)({
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

export const SignUpFormControl = styled(FormControl)({
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

export const SignUpAutocomplete = styled(Autocomplete)({
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
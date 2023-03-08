import {styled} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Colors} from "../../assets/Colors";

export const SignInContainer = styled("div")({});

export const SignInTextField = styled(TextField)({
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

export const SignInFooter = styled("div")({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

});
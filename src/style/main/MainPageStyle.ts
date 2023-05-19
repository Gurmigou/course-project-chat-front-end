import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import {Colors} from "../../assets/Colors";

export const MainContainer = styled("div")({
    height: '100vh',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)'
})

export const MainContent = styled("div")({
    maxWidth: '100%',
    margin: '0 auto',
});

export const JoinChatButton = styled(Button)({
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '1.5rem 4rem',
    borderRadius: '2rem',
    background: Colors.color6,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:hover': {
        background: Colors.color5
    },
    '&:active': {
        background: Colors.color5
    },
})
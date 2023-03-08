import {styled} from "@mui/material";
import {Colors} from "../../../assets/Colors";

export const WaitingPeerContainer = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    background: Colors.color3,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: '5px',
    '@media (max-width: 1420px)': {
        minHeight: '480px',
    },
})

export const WaitingPeerText = styled('h1')({
    color: 'white',
    fontSize: '2rem',
})
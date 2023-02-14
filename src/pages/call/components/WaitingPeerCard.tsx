import {CircularProgress, styled} from "@mui/material";
import {StyleParams} from "../../../model/Common";

const WaitingPeerContainer = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    background: '#434e5b',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: '5px',
})

const WaitingPeerText = styled('h1')({
    color: 'white',
    fontSize: '2rem',
})

export const WaitingPeerCard = ({style}: StyleParams) => {

    return (
        <WaitingPeerContainer style={style}>
            <WaitingPeerText>Waiting for peer to join</WaitingPeerText>
            <CircularProgress style={{color: 'white'}} size={'4rem'}/>
        </WaitingPeerContainer>
    );
}
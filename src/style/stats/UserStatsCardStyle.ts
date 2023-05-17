import {styled} from "@mui/material";
import {Colors} from "../../assets/Colors";

export const UserStatsCardContainer = styled("div")({
    maxWidth: '720px',
    margin: '2rem auto',
    display: 'flex',
    justifyContent: 'space-between',
    height: '5rem',
    backgroundColor: Colors.color4,
    borderRadius: '5px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    color: "white",
    padding: '1rem',
});

export const UserStatsCallInfo = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const PeersName = styled("div")({
    fontSize: '2rem',
    fontWeight: 'bold',
})

export const Duration = styled("div")({
    fontSize: '1rem',
    textAlign: 'start'
})

export const CallDate = styled("div")({

});
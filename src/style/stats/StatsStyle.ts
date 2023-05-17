import {styled} from "@mui/material";
import {Colors} from "../../assets/Colors";

export const StatsWrapper = styled("div")({
    backgroundColor: Colors.color3,
    height: "max-content",
    minHeight: "100%",
});

export const StatsContainer = styled("div")({
    maxWidth: '1120px',
    margin: '0 auto',
});

export const StatsHeader = styled("div")({
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    margin: '2rem 0',
});
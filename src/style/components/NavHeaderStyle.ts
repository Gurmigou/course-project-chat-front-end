import {styled} from "@mui/material";
import {Colors} from "../../assets/Colors";

export const Header = styled("div")({
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'radial-gradient(circle, rgba(53,64,75,1) 51%, rgba(46,54,61,1) 95%)',
    paddingBottom: '1rem'
});

export const TopLeftLogo = styled("div")({
    marginTop: '1rem',
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
});

export const TopRightLogo = styled("div")({
    marginTop: '1rem',
    marginRight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '0.5rem',
    borderRadius: '10px',
});

export const LogoContainer = styled("div")({
    padding: '1rem',
    background: Colors.color5,
    borderRadius: '20px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)'
});
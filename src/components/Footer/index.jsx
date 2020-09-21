import React from 'react';
import { 
    makeStyles, 
    Typography, 
    Container,
    Grid,
    Item,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.textGrey,
        paddingTop: '3rem',
        paddingBottom: '3rem'
    }
}));

const Footer = () => {

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
        </div>
    )
}

export default Footer;
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import HeroImg from '../../img/lowpoly.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
        textAlign: 'center',
    }
}));

const Hero = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant='h2'>Deep Cleaning & Advanced Covid-19 Disinfection Services</Typography>
            <br />
            <Typography>Manchester & Surrounding Areas</Typography>
            <br />

        </div>
    )

};

export default Hero;
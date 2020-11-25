import React from 'react';
import { makeStyles, Typography, Container, Button, Grid, Link, Hidden } from '@material-ui/core';
import HeroImg from '../../img/hero.png';
import ADPLogo from '../../img/adp3.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10)
    },
    button: {
        '&:hover': {
            backgroundColor: 'white',
            borderColor: 'white',
            color: theme.palette.banner
        },
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white'
    },
    img: {
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
        width: '80%'
    },
    img2: {
        position: 'relative',
        // left: '50%',
        // transform: 'translate(-50%)',
        width: '40%'
    }
}));

const Hero = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Container maxWidth='lg' >
                <Grid container alignItems='center'>
                    <Grid item xs={12} md={5}>
                        <img src={ADPLogo} className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} md={7} style={{textAlign: 'center'}}>
                        <Hidden only={["md", "lg", "xl"]}>
                            <Button href="tel:07458311447" className={classes.button} variant='outlined' style={{textAlign: 'center', fontSize: '1.4rem', marginBottom: '1rem'}} size='large'>Call Us</Button>
                        </Hidden>
                        <Typography style={{color: 'white', textAlign: 'center'}} variant='h2'>Bringing the future of cleaning, to the North West and surrounding areas</Typography>
                        <br />
                        <a href='https://uk.trustpilot.com/review/adpantibac.co.uk' target='_blank'><img className={classes.img2} src='https://cdn.trustpilot.net/brand-assets/1.0.3/logo-white.svg' width='350'/></a>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )

};

export default Hero;
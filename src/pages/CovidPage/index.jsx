import React from 'react';
import {
    Typography,
    Link,
    Grid,
    makeStyles,
    Container,
    Paper,
    Icon,
    CardMedia
} from '@material-ui/core';

import CoronaBanner from '../../img/home-banner.jpg';
import Contact from '../../components/Contact';
import Hero from '../../components/Hero';
import HeroImg from '../../img/hero.png';
import FeatureBox from '../../components/FeatureBox';

import sponge from '../../img/sponge.svg';
import germ from '../../img/germ.svg';
import shield from '../../img/shield.svg';

const useStyles = makeStyles((theme) => ({
    li: {
        textDecoration: 'none'
    },
    root: {
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10)
    },
    ul: {
        padding:0,
        listStyleType: 'none',
        textDecoration: 'none'
    },
    banner: {
        width: '100%',
        backgroundColor: theme.palette.banner,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        // margin: '10px 0'
    },
    banner2: {
        width: '100%',
        backgroundColor: theme.palette.banner,
        height: '10px'
        // margin: '10px 0'
    },
    icon: {
        height: '80px',
        margin: '1rem 0'
    },
    container: {
        textAlign: 'center',
        alignItems: 'stretch',
        marginBottom: '20px'
    },
    paper: {
        padding: '1rem',
        height: '100%'
    }
}));


const CovidPage = () => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <div className={classes.banner}>
                <Container maxWidth='lg'>
                    <Typography variant='h3' style={{ color: 'white' }}>COVID-19</Typography>
                </Container>
            </div>
            <div className={classes.root}>
                <Container maxWidth='lg' >
                    <Grid container alignItems='center'>
                        <Typography style={{color: 'white'}} variant='h3'>With our signature COVID Secure package, we can ensure your premises stay COVID secure, free of harmful germs and bacteria meaning reduced risk of any business disruption. Our COVID Secure package works in three steps…</Typography>
                    </Grid>
                </Container>
            </div>
            <br />
            <Container maxWidth='lg'>
                <br />
                <Grid container justify="center" spacing={4} className={classes.container} direction="row">
                    <Grid item lg={4} xs={12}>
                        <Paper className={classes.paper} elevation={5}>
                            <Typography variant="h3">Deep Clean</Typography>
                            <img className={classes.icon} src={sponge} />
                            <Typography>Members of our cleaning team will come and assess the premises and get to work. Leaving no stone unturned, we ensure every nuck and crannie in the room is spotless prior to our pioneering fog treatment.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Paper className={classes.paper} elevation={5}>
                            <Typography variant="h3">Disinfect</Typography>
                            <img className={classes.icon} src={germ} />
                            <Typography>Using our specialist fogging machines, our technicians completely disinfect every section of the room, reaching the places you can’t. We use approved and certified products which have been certified and approved to instantly kill any active COVID-19 bacteria as well as any other active harmful virus bacteria.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Paper className={classes.paper} elevation={5}>
                            <Typography variant="h3">Protect</Typography>
                            <img className={classes.icon} src={shield} />
                            <Typography>This is the most important stage of our process, protecting you from the harmful bacteria. Using our pioneering fog treatment, our technicians will apply a protective layer over every section of the room, which prevents any bacteria re-occurring and nesting in any hidden areas.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Container maxWidth='lg'>
                <Typography variant='h3'>Other Bacterias and Virus’ we keep you safe from:</Typography>
                <ul>
                    <li><Typography>MRSA</Typography></li>
                    <li><Typography>Norovirus</Typography></li>
                    <li><Typography>Cholera</Typography></li>
                    <li><Typography>Hepatitis B</Typography></li>
                    <li><Typography>H1N1 and H5</Typography></li>
                    <li><Typography>E.coli ESBL</Typography></li>
                    <li><Typography>NDM1</Typography></li>
                    <li><Typography>SARS</Typography></li>
                    <li><Typography>MRSA</Typography></li>
                </ul>
            </Container>
            <br />
            <br />
            <div className={classes.banner2} style={{backgroundColor: 'grey', background: `repeating-linear-gradient(
                45deg,
                #272828,
                #272828 20px,
                #fff500 20px,
                #fff500 40px
            )`}} />
            <div className={classes.banner}>
                <Container maxWidth='lg' style={{ textAlign: 'center' }}>
                    <Typography variant='h3' style={{ color: 'white' }}>Please note our fogging treatment can be requested separately if you have your own cleaners or cleaning schedule.</Typography>
                </Container>
            </div>
            <div className={classes.banner2} style={{backgroundColor: 'grey', background: `repeating-linear-gradient(
                45deg,
                #272828,
                #272828 20px,
                #fff500 20px,
                #fff500 40px
            )`}} />
            <br />
            <br />
            <Contact />
            <br />
        </React.Fragment>
    );

}

export default CovidPage;
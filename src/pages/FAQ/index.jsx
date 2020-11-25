import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Typography, Container, makeStyles, Grid, Paper, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Contact from '../../components/Contact';
import HeroImg from '../../img/hero.png';

import CancelIcon from '@material-ui/icons/Cancel';
    const useStyles = makeStyles((theme) => ({
        banner: {
            width: '100%',
            backgroundColor: theme.palette.banner,
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            // margin: '10px 0'
        },
        container: {
            textAlign: 'center',
            alignItems: 'stretch',
            marginBottom: '20px'
        },
        paper: {
            borderTopRightRadius: '1.4rem',
            borderTopLeftRadius: '1.4rem',
            height: '100%'
        },
        top: {
            borderTopRightRadius: '1.4rem',
            borderTopLeftRadius: '1.4rem',
            backgroundColor: 'silver',
            padding: '1rem'
        },
        bottom: {
            bottom: 0,
            padding: '1rem'
        },
        middle: {
            margin: 'auto',
            padding: '1rem'
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
        root: {
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10)
        },
    }));


    const FAQPage = () => {

        const classes = useStyles();

        return(
            <React.Fragment>
                <div className={classes.banner}>
                    <Container maxWidth='lg'>
                        <Typography variant='h3' style={{ color: 'white' }}>FAQ & Packages</Typography>
                    </Container>
                </div>
                <div className={classes.root}>
                <Container maxWidth='lg' >
                    <Grid container alignItems='center'>
                        <Typography style={{color: 'white'}} variant='h3'>Here you will find our FAQs as well as the fantastic packages we offer.</Typography>
                    </Grid>
                </Container>
            </div>
                <br />
                <Container maxWidth='lg'>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{fontWeight: '400', fontSize: '1.3rem'}}align="center"><Typography variant='h4'>Package</Typography></TableCell>
                                    <TableCell style={{fontWeight: '400', fontSize: '1.3rem'}}align="center"><Typography variant='h4'>Pioneering Disinfect</Typography></TableCell>
                                    <TableCell style={{fontWeight: '400', fontSize: '1.3rem'}}align="center"><Typography variant='h4'>Chemical FOG Treatment</Typography></TableCell>
                                    <TableCell style={{fontWeight: '400', fontSize: '1.3rem'}}align="center"><Typography variant='h4'>Signature Aftercare Package</Typography></TableCell>
                                    <TableCell style={{fontWeight: '400', fontSize: '1.3rem'}}align="center"><Typography variant='h4'>Initial Thorough Deepclean</Typography></TableCell>
                                    <TableCell style={{fontWeight: '400', fontSize: '1.3rem'}}align="center"><Typography variant='h4'>Monthly Deepcleans</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'><Typography variant='h4'>Basic</Typography></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CancelIcon style={{color: 'red', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CancelIcon style={{color: 'red', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CancelIcon style={{color: 'red', fontSize: '40px'}}/></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='center'><Typography variant='h4'>Intermediate</Typography></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CancelIcon style={{color: 'red', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CancelIcon style={{color: 'red', fontSize: '40px'}}/></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='center'><Typography variant='h4'>Advanced</Typography></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CancelIcon style={{color: 'red', fontSize: '40px'}}/></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='center'><Typography variant='h4'>Enterprise</Typography></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                    <TableCell align='center'><CheckCircleIcon style={{color: 'green', fontSize: '40px'}}/></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                {/* <Container maxWidth='lg'>
                    <br />
                    <Grid container justify="center" spacing={4} className={classes.container} direction="row">
                        <Grid item lg={3} xs={12}>
                            <Paper className={classes.paper} elevation={5}>
                                <div className={classes.top} style={{ backgroundColor: '#92c850' }}>
                                    <Typography variant="h3" style={{color: 'white'}}>Basic</Typography>
                                </div>
                                <div className={classes.middle}>
                                    <ul>
                                        <li><Typography>Pioneering Disinfect</Typography></li>
                                        <li><Typography>Chemical FOG Treatment</Typography></li>
                                    </ul>
                                </div>
                                <div className={classes.bottom} style={{ backgroundColor: '#92c850' }}>
                                    <Button className={classes.button} variant='outlined'>CONTACT US</Button>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Paper className={classes.paper} elevation={5}>
                                <div className={classes.top} style={{ backgroundColor: '#61b8d6' }}>
                                    <Typography variant="h3" style={{color: 'white'}}>Intermediate</Typography>
                                </div>
                                <div className={classes.middle}>
                                    <Typography>Using our specialist fogging machines, our technicians completely disinfect every section of the room, reaching the places you can’t. We use approved and certified products which have been certified and approved to instantly kill any active COVID-19 bacteria as well as any other active harmful virus bacteria.</Typography>
                                </div>
                                <div className={classes.bottom} style={{ backgroundColor: '#61b8d6' }}>
                                    <Button className={classes.button} variant='outlined'>CONTACT US</Button>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Paper className={classes.paper} elevation={5}>
                                <div className={classes.top} style={{ backgroundColor: '#53c3ad' }}>
                                    <Typography variant="h3" style={{color: 'white'}}>Advanced</Typography>
                                </div>
                                <div className={classes.middle}>
                                    <Typography>This is the most important stage of our process, protecting you from the harmful bacteria. Using our pioneering fog treatment, our technicians will apply a protective layer over every section of the room, which prevents any bacteria re-occurring and nesting in any hidden areas.</Typography>
                                </div>
                                <div className={classes.bottom} style={{ backgroundColor: '#53c3ad' }}>
                                    <Button className={classes.button} variant='outlined'>CONTACT US</Button>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Paper className={classes.paper} elevation={5}>
                                <div className={classes.top} style={{ backgroundColor: '#6a6a6a' }}>
                                    <Typography variant="h3" style={{color: 'white'}}>COVID Secure</Typography>
                                </div>
                                <div className={classes.middle}>
                                    <Typography>This is the most important stage of our process, protecting you from the harmful bacteria. Using our pioneering fog treatment, our technicians will apply a protective layer over every section of the room, which prevents any bacteria re-occurring and nesting in any hidden areas.</Typography>
                                </div>
                                <div className={classes.bottom} style={{ backgroundColor: '#6a6a6a' }}>
                                    <Button className={classes.button} variant='outlined'>CONTACT US</Button>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container> */}
                <br />
                <div className={classes.banner}>
                    <Container maxWidth='lg'>
                    <Typography variant='h4' style={{ color: 'white'}} >Hopefully our FAQ section will answer any of your questions. If not, go to the <a href='#contact' style={{color: 'white'}}>Contact Section</a> and send us a message. Alternatively, email us directly at <a href='mailto:enquiries@adpantibac.com' style={{color: 'white'}}>enquiries@adpantibac.com</a></Typography>
                    </Container>
                </div>
                <br />
                <Container maxWidth='lg'>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant='h4'>How effective is the fogging treatment?</Typography></AccordionSummary>
                        <AccordionDetails><Typography>It's the fastest and most economic way of disinfecting and protecting any area. It is ideal for outbreak control measures and kills 99.99% of pathogens by reaching all the areas you simply cannot.</Typography></AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant='h4'>Do you offer any aftercare services in between treatments?</Typography></AccordionSummary>
                        <AccordionDetails><Typography>Yes, we do offer an aftercare package. If you have chosen not to take advantage of our scheduled cleaning package we can provide you with a disinfectant to use when cleaning which is skin safe, safe to use around food and on all surface types.</Typography></AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant='h4'>What are the benefits of having the fogging treatment?</Typography></AccordionSummary>
                        <AccordionDetails>
                            <ul>
                                <li><Typography>Minimised risk of any business disruption.</Typography></li>
                                <li><Typography>No need to move furniture</Typography></li>
                                <li><Typography>Increased clientele.- peace of mind knowing their entering a COVID secure premises.</Typography></li>
                                <li><Typography>Cost effective and very affordable.</Typography></li>
                                <li><Typography>Most importantly it helps protect you, your staff and your guests.</Typography></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant='h4'>How long until a treated area is safe to enter?</Typography></AccordionSummary>
                        <AccordionDetails><Typography>Treated areas are safe to enter after 30 minutes.</Typography></AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant='h4'>I run a restaurant, is this the fogging treatment safe to use around food?</Typography></AccordionSummary>
                        <AccordionDetails><Typography>Yes, the product is safe to use around food and meets the BS EN 13697 standards.</Typography></AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant='h4'>Do you offer a cleaning service on its own?</Typography></AccordionSummary>
                        <AccordionDetails><Typography>Yes, we are one of the North West's most recommended contract cleaning companies and this can be arrange however frequent you require.</Typography></AccordionDetails>
                    </Accordion>
                </Container>
                <br />
                <br />
                <Contact />
                <br />
            </React.Fragment>
        )

    };

    export default FAQPage;
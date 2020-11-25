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
import InfiniteCarousel from 'react-leaf-carousel';

import Hero from '../../components/Hero';
import InfoBox from '../../components/InfoBox';
import Contact from '../../components/Contact';

import WashHands from '../../img/man.jpg';
import faq from '../../img/faq.svg';

import person1 from '../../img/people/1.jpg';
import person2 from '../../img/people/2.jpg';
import person3 from '../../img/people/3.jpg';
import person4 from '../../img/people/4.jpg';
import person5 from '../../img/people/5.jpg';
import person6 from '../../img/people/6.jpg';

import person9 from '../../img/people/9.jpg';
import person10 from '../../img/people/10.jpg';
import person11 from '../../img/people/11.jpg';
import person12 from '../../img/people/12.jpg';

import person13 from '../../img/people/13.jpg';
import person14 from '../../img/people/14.jpg';
import person15 from '../../img/people/15.jpg';

import person16 from '../../img/people/16.jpg';
import person17 from '../../img/people/17.jpg';
import person18 from '../../img/people/18.jpg';



import shop from '../../img/shop.svg'
import house from '../../img/house.svg'
import train from '../../img/locomotive.svg'

const people = [person1, person2, person3, person4, person5, person6, person9, person10, person11, person12, person13, person14, person15, person16, person17, person18];

const useStyles = makeStyles((theme) => ({
    li: {
        textDecoration: 'none'
    },
    ul: {
        padding:0,
        listStyleType: 'none',
        textDecoration: 'none'
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
    }
}));


const HomePage = () => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Hero />
            <InfoBox imageUrl={WashHands} outline={true}>
                <Typography variant='h2'>Who are we and what do we do?</Typography>
                <br />
                <Typography>We are the North West’s leading deep clean and decontamination specialists. Using our pioneering disinfect and protect chemical fog treatment, which is the future of cleaning, we help keep your premises free of harmful bacteria for up to 30 days at a time, offered to both residential and commercial customers.</Typography>
                <br />
                <Typography>In wake of the Coronavirus pandemic, now is the time to be ahead of the curve, the way we clean as a society will have to change for good to prevent any future outbreaks of any existing or new virus types. Gone are the days of cross contamination using dirty cloths, cutting corners because they are hard to reach, the future of cleaning is here and we are the answer.</Typography>
            </InfoBox>
            <br />
            <br />
            <Container maxWidth='lg'>
                <Typography variant='h2' style={{textAlign: 'center'}}>Sectors Covered</Typography>
                <br />
                <Grid container justify="center" spacing={4} className={classes.container} direction="row">
                    <Grid item md={4} xs={12} style={{marginTop: '16px'}}>
                        <Paper className={classes.paper} elevation={5}>
                            <Typography variant="h3">Commercial</Typography>
                            <img className={classes.icon} src={shop} />
                            <ul className={classes.ul}>
                                <li className={classes.li}><Typography>Hotels</Typography></li>
                                <li className={classes.li}><Typography>Education & Childcare</Typography></li>
                                <li className={classes.li}><Typography>Office & Retail</Typography></li>
                                <li className={classes.li}><Typography>Pubs & Restaurants</Typography></li>
                                <li className={classes.li}><Typography>Sports & Leisure</Typography></li>
                                <li className={classes.li}><Typography>Factories</Typography></li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12} style={{marginTop: '16px'}}>
                        <Paper className={classes.paper} elevation={5}>
                            <Typography variant="h3">Residential</Typography>
                            <img className={classes.icon} src={house} />
                            <ul className={classes.ul}>
                                <li className={classes.li}><Typography>Private Accomodation</Typography></li>
                                <li className={classes.li}><Typography>Public spaces</Typography></li>
                                <li className={classes.li}><Typography>Communal Areas</Typography></li>
                                <li className={classes.li}><Typography>New tenancies</Typography></li>
                                <li className={classes.li}><Typography>Care homes</Typography></li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12} style={{marginTop: '16px'}}>
                        <Paper className={classes.paper} elevation={5}>
                            <Typography variant="h3">Transport</Typography>
                            <img className={classes.icon} src={train} />
                            <ul className={classes.ul}>
                                <li className={classes.li}><Typography>Public transport</Typography></li>
                                <li className={classes.li}><Typography>Taxi Services</Typography></li>
                                <li className={classes.li}><Typography>Fleet vehicles</Typography></li>
                                <li className={classes.li}><Typography>Private vehicles</Typography></li>
                            </ul>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <InfoBox imageUrl='https://serenityatcoconutbay.com/wp-content/uploads/2018/10/BestPriceGurantee-Logo.png' imagePosition='right'>
                <Typography variant='h2'>How long does the treatment last?</Typography>
                <br />
                <Typography>The treatment lasts for up to 30 days, meaning a scheduled monthly visit will be arranged to ensure your premises stay COVID secure and free of any outbreaks. The formulation we use is approved and signed off by leading medical experts in our fight against COVID-19, certification of this will be provided as well as a certificate from us each time we visit for you to display for your staff, customers and guests to keep yours and their minds at ease as you have gone that extra step to ensure their safety is number one priority.</Typography>
                <br />
            </InfoBox>
            <br />
            <InfiniteCarousel
                breakpoints={[
                {
                    breakpoint: 450,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    },
                },
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={4}
                slidesToShow={5}
                scrollOnDevice={true}
            >
                {people.map(photo => (<div>
      <img
        alt=''
        src={photo}
      />
    </div>))}
            
            </InfiniteCarousel>
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
                    <Typography variant='h3' style={{ color: 'white' }}>For the latest COVID-19 information, visit <Link target='_blank' href='https://www.gov.uk/coronavirus' style={{color: 'white'}}>www.gov.uk/coronavirus</Link>.</Typography>
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
            <Contact />
            <br />
        </React.Fragment>
    );

}

export default HomePage;
import React from 'react';
import {
    Typography,
    Link,
    Grid,
    Container
} from '@material-ui/core';

import Swiper from 'react-id-swiper';

import Hero from '../../components/Hero';
import InfoBox from '../../components/InfoBox';

import WashHands from '../../img/wash_hand.svg';
import faq from '../../img/faq.svg';
import vid1 from '../../img/vid_1.mp4';

const HomePage = () => {

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }
    return(
        <React.Fragment>
            <InfoBox imageUrl={WashHands}>
                <Typography variant='h2'>Covid-19 Disinfection Services Manchester</Typography>
                <br />
                <Typography>Welcome to H2 cleaning we are deep cleaning experts who cover the whole of Manchester Our staff is well equipped to handle the dirtiest of your living or workspaces.</Typography>
                <br />
                <Typography>Not only that, in the wake of the Covid-19 pandemic we are working hard for domestic and commercial clients to provide the best support to cleaning, disinfecting and sanitising their work and home spaces.</Typography>
                <br />
                <Typography> Deep cleansing and disinfecting is your answer to all the little corners or spaces that you cannot reach or for those stains that have been left alone, solely due to their stubbornness. Deep cleaning will take care of the bathrooms with the hard to reach spaces behind the shower, and the dirt that has accumulated on the extractor fans.</Typography>
                <br />
                <Typography>Not only that but when you hire H2 cleaning services, we guarantee we won’t leave any corner of your premises unturned. From dirt to viruses, we promise to leave to your home or business germ-free.</Typography>
            </InfoBox>
            <br />
            <Container maxWidth='lg'>
                <Grid container spacing={4} style={{textAlign: 'center'}}>
                    <Grid item xs={3}>
                        <Typography variant="h3">Industry Experience</Typography>
                        <Typography>With more than ten years of industry experience, you can rest assured we will offer a professional and efficient service.</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h3">Industry Experience</Typography>
                        <Typography>With more than ten years of industry experience, you can rest assured we will offer a professional and efficient service.</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h3">Industry Experience</Typography>
                        <Typography>With more than ten years of industry experience, you can rest assured we will offer a professional and efficient service.</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h3">Industry Experience</Typography>
                        <Typography>With more than ten years of industry experience, you can rest assured we will offer a professional and efficient service.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <InfoBox imageUrl={faq} imagePosition='right'>
                <Typography variant='h2'>Covid-19 Disinfection Services Manchester</Typography>
                <br />
                <Typography>Welcome to H2 cleaning we are deep cleaning experts who cover the whole of Manchester Our staff is well equipped to handle the dirtiest of your living or workspaces.</Typography>
                <br />
                <Typography>Not only that, in the wake of the Covid-19 pandemic we are working hard for domestic and commercial clients to provide the best support to cleaning, disinfecting and sanitising their work and home spaces.</Typography>
                <br />
                <Typography> Deep cleansing and disinfecting is your answer to all the little corners or spaces that you cannot reach or for those stains that have been left alone, solely due to their stubbornness. Deep cleaning will take care of the bathrooms with the hard to reach spaces behind the shower, and the dirt that has accumulated on the extractor fans.</Typography>
                <br />
                <Typography>Not only that but when you hire H2 cleaning services, we guarantee we won’t leave any corner of your premises unturned. From dirt to viruses, we promise to leave to your home or business germ-free.</Typography>
            </InfoBox>
        </React.Fragment>
    );

}

export default HomePage;
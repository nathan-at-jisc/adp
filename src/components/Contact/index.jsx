import React, { useState } from 'react';
import {
    Container,
    Grid,
    TextField,
    Typography,
    makeStyles,
    Button,
    Link
} from '@material-ui/core';
import axios from 'axios';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            backgroundColor: theme.palette.banner,
            borderColor: theme.palette.banner,
            color: 'white'
        },
        backgroundColor: 'transparent',
        borderColor: theme.palette.banner,
        color: theme.palette.banner
    },
    icon: {
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        marginLeft: '1rem'
    }
}));

const Contact = () => {

    const [ details, setDetails ] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [ sending, setSending ] = useState(false);
    const [ sent, setSent ] = useState(false);

    const submit = () => {
            setSending(true);
            axios.post('/contact_email.php', details).then(res => {
                setSending(false);
                setSent(true);
            }).catch(err => {
                setSending(false)
            });
    }

    const classes = useStyles();

    return(
        <Container maxWidth='lg' id='contact'>
            <Typography variant='h2'>Contact Us</Typography>
            <br />
            <Typography>We are based in Central Manchester but have a wide range of clients ranging across the North West in areas such as: Blackburn, Accrington, Bolton, Tameside, Salford and many more.</Typography>
            <br />
            <Typography>Some of our most recent enquiries have been businesses opening back up after the nationwide lockdown.</Typography>
            <br />
            <Typography>Call now to book your free no obligation quote on <a href="tel:07458311447">07458311447</a>.</Typography>
            <br />
            <div className={classes.icon}>
                <Typography ><Link href='https://www.instagram.com/adpantibac/'><InstagramIcon color='red' fontSize='large'/></Link></Typography>
                <Typography className={classes.link}><Link href='https://www.instagram.com/adpantibac/'>adpantibac</Link></Typography>
            </div>
            <br />
            <div className={classes.icon}>
                <Typography ><Link href='https://www.facebook.com/adpantibac'><FacebookIcon color='red' fontSize='large'/></Link></Typography>
                <Typography className={classes.link}><Link href='https://www.facebook.com/adpantibac'>ADP Anti-Bac</Link></Typography>
            </div>
            <br />
            <div className={classes.icon}>
                <Typography ><Link href='https://www.linkedin.com/company/adp-anti-bac/'><LinkedInIcon color='red' fontSize='large'/></Link></Typography>
                <Typography className={classes.link}><Link href='https://www.linkedin.com/company/adp-anti-bac/'>adpantibac</Link></Typography>
            </div>
            <br />
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <TextField label="Name" value={details.name} onChange={(e)=> { setDetails({...details, name: e.target.value}) }}fullWidth variant="outlined"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField label="Email" value={details.email} onChange={(e)=> { setDetails({...details, email: e.target.value}) }}fullWidth variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Phone" value={details.phone} onChange={(e)=> { setDetails({...details, phone: e.target.value}) }}fullWidth variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField multiline value={details.message} onChange={(e)=> { setDetails({...details, message: e.target.value}) }}label="Message" fullWidth rows={4} variant="outlined"/>
                </Grid>
            </Grid>
            {sent && <Typography style={{color: 'green', marginTop: '0.5rem', fontWeight: '400'}}>Thank you for your enquiry, we'll be in touch soon!</Typography>}
            
            <br />
            <Button className={classes.button} variant='outlined' onClick={() => submit()} disabled={sending || sent}>SEND</Button>
        </Container>
    );

}

export default Contact;
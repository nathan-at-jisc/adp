import React from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        image: {
            height: '100%',
            objectFit: 'cover',
            width: '100%'
        },
        marginAuto: {
            margin: 'auto'
        },
        root: {
            backgroundColor: 'transparent',
            color: theme.palette.textGrey,
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(3)
        }
    }));

const InfoBox = ({ imageUrl, imageAltText, children, backgroundColor, color, imagePosition }) => {

    const classes = useStyles({ backgroundColor, color })();

    return (
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container spacing={8} direction={imagePosition === 'right' ? 'row' : 'row-reverse'}>
                    <Grid item md={12} lg={8} className={classes.marginAuto}>
                        {children}
                    </Grid>
                    <Grid item lg={4} className={classes.marginAuto}>
                        <img src={imageUrl} alt={imageAltText} className={classes.image} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default InfoBox;
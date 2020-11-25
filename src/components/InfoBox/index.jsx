import React from 'react';
import { makeStyles, Grid, Container, Paper, Hidden } from '@material-ui/core';

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

const InfoBox = ({ imageUrl, imageAltText, children, backgroundColor, color, imagePosition, outline }) => {

    const classes = useStyles({ backgroundColor, color })();

    return (
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container spacing={8} direction={imagePosition === 'right' ? 'row' : 'row-reverse'}>
                    <Grid item sm={12} md={9} className={classes.marginAuto}>
                        {children}
                    </Grid>
                    <Hidden only={["xs", "sm"]}>
                        <Grid item md={3} sm={0}className={classes.marginAuto}>
                            {outline  ? <Paper style={{padding: '8px 8px 3px 8px'}}elevation={5}>
                                <img src={imageUrl} alt={imageAltText} className={classes.image} />
                            </Paper> : <img src={imageUrl} alt={imageAltText} className={classes.image} />
                            }
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </div>
    );
};

export default InfoBox;
import React from 'react';
import { 
    makeStyles, 
    Typography, 
    Container,
    Grid,
    Item,
} from '@material-ui/core';

import CoronaImg from '../../img/corona.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.banner,
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    container: {
        color: 'white'
    },
    img: {
        position: 'relative',
        height: '2rem'
    }
}));

const TopBanner = () => {

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <Container className={classes.container} maxWidth='xl'>
                    <img src={CoronaImg} className={classes.img}/>
            </Container>
        </div>
    )
}

export default TopBanner;
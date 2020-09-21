import React, { useState } from 'react';
import { 
    makeStyles, 
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Menu,
    MenuItem,
    Link,
    Container,
    Tabs,
    Tab,
    Button
} from '@material-ui/core';

import ADPLogo from '../../img/adp.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: theme.palette.banner
    },
    logo: {
        width: 200,
        // height: 43.54
    }
}));

const TopBanner = () => {

    const classes = useStyles();

    const handleClose = () => {

    };
    
    return(
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}} >
                <Container maxWidth='lg'>
                    <Toolbar>
                        <img className={classes.logo} src={ADPLogo}alt="Bosch Logo" />
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default TopBanner;
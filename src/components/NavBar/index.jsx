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
    Box,
    Hidden,
    Tab,
    IconButton,
    Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ADPLogo from '../../img/adp.png';
import Corona from '../../img/corona.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: theme.palette.banner
    },
    logo: {
        height: 60,
        marginRight: 20
        // height: 43.54
    },
    list: {
        textAlign: 'center',
        width: '100%'
    },
    li: {
        display: 'inline-block',
        marginLeft: '3.5rem',
        padding: '1rem 0',
        '&:nth-of-type(1)': {
            marginLeft: 0
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),

    }
}));

const TopBanner = () => {

    const classes = useStyles();

    const [ open, toggleOpen ] = useState(false);

    return(
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}} >
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Hidden only={["md","lg", "xl"]}>
                            <IconButton edge="start" color="primary" aria-label="menu" className={classes.menuButton}>
                                <MenuIcon style={{fontSize: '3rem'}} onClick={() => toggleOpen(prevState => !prevState)} />
                            </IconButton>
                            <div style={{float: 'right', width: '100%'}}>
                                <img className={classes.logo} style={{float: 'right' }}src={Corona}alt="Bosch Logo" />
                            </div>
                        </Hidden>
                        <Hidden only={["xs", "sm"]}>
                        <img className={classes.logo} src={ADPLogo}alt="Bosch Logo" />
                        <ul className={classes.list}>
                            <li className={classes.li}><Typography><Link href='/'>Home</Link></Typography></li>
                            <li className={classes.li}><Typography><Link href='/covid'>COVID-19</Link></Typography></li>
                            <li className={classes.li}><Typography><Link href='/faq'>FAQ & Packages</Link></Typography></li>
                            <li className={classes.li}><Typography><Link href='/#contact'>Contact</Link></Typography></li>
                        </ul>
                        <img className={classes.logo} src={Corona}alt="Bosch Logo" />
                        </Hidden>
                    </Toolbar>
                    <div style={{textAlign: 'center', display: `${open ? 'block' : 'none'}`}}>
                            <Typography><Link href='/'>Home</Link></Typography>
                            <Typography><Link href='/covid'>COVID-19</Link></Typography>
                            <Typography><Link href='/faq'>FAQ & Packages</Link></Typography>
                            <Typography><Link href='/#contact'>Contact</Link></Typography>
                    </div>
                </Container>
            </AppBar>
        </div>
    )
}

export default TopBanner;
import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    overrides: {
        MuiLink: {
            root: {
                '&:active': {
                    backgroundColor: '#fd6',
                    color: '#174992',
                    outline: 'solid #fd6',
                    textDecoration: 'underline'
                },
                '&:focus': {
                    backgroundColor: '#fd6',
                    color: '#174992',
                    outline: 'solid #fd6',
                    textDecoration: 'none'
                },
                '&:focus:hover': {
                    backgroundColor: '#fd6',
                    color: '#007aaa',
                    outline: 'solid #fd6',
                    textDecoration: 'underline'
                },
                '&:hover': {
                    color: '#ae460e',
                    cursor: 'pointer',
                    transition: 'color .2s ease'
                },
                border: '0',
                color: '#174992',
                textDecoration: 'underline !important'
            }
        },
        MuiTab: {
            root: {
                color: 'white'
            }
        },
        MuiTabs: {
            root: {
                backgroundColor: '#3c525f',
                color: 'white'
            }
        },
        MuiTypography: {
            body1: {
                '& strong': {
                    fontWeight: '400'
                },
                fontSize: '1.1rem',
                color: '#2c3841',
                fontWeight: '300'
            },
            body2: {
                '& strong': {
                    fontWeight: 500
                },
                fontSize: '1rem'
            },
            h1: {
                fontSize: '2.5rem',
                fontWeight: '300',
                [breakpoints.up('sm')]: {
                    fontSize: '3rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '3.5rem'
                }
            },
            h2: {
                fontSize: '2.5rem',
                fontWeight: '500',
                color: '#174992',
                [breakpoints.down('md')]: {
                    fontSize: '2rem'
                }
            },
            h3: {
                fontSize: '1.5rem',
                fontWeight: '300',
                color: '#174992',
                [breakpoints.up('sm')]: {
                    fontSize: '1.75rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '2rem'
                }
            },
            h4: {
                fontSize: '1.25rem',
                fontWeight: '300',
                [breakpoints.up('md')]: {
                    fontSize: '1.5rem'
                }
            },
            h5: {
                fontSize: '1rem',
                [breakpoints.up('md')]: {
                    fontSize: '1.25rem'
                }
            },
            h6: {
                fontSize: '1rem'
            },
            overline: {
                fontSize: '0.875rem',
                [breakpoints.up('md')]: {
                    fontSize: '1.5625rem'
                }
            }
        }
    },
    palette: {
        banner: '#174992',
        textGrey: '#2c3841'
    },
    typography: {
        color: '#2c3841',
        fontFamily: 'Helvetica'
    }
});

export default theme;

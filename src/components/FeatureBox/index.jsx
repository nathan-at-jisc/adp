import React from 'react';

import { makeStyles, ThemeProvider, Grid } from '@material-ui/core';

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              b: parseInt(result[3], 16),
              g: parseInt(result[2], 16),
              r: parseInt(result[1], 16)
          }
        : null;
};

const useStyles = ({ backgroundImage, backgroundColor, color, imageHeight = '500px' }) => {
    return makeStyles((theme) => {
        const rgb = hexToRgb(theme.palette.banner);
        return {
            imageContainer: {
                backgroundColor: theme.palette.banner,
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: imageHeight
            },
            textContainer: {
                backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.85)`,
                color: color,
                padding: theme.spacing(5)
            }
        };
    });
};

const FeatureBox = ({ altTitle, backgroundColor, backgroundImage, children, color, imageHeight }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();
    return (
        <Grid
            container
            direction='column'
            justify='flex-end'
            alignItems='flex-end'
            title={altTitle}
            className={classes.imageContainer}
        >
            <Grid item className={classes.textContainer}>
                {children}
            </Grid>
        </Grid>
    );
};

export default FeatureBox;
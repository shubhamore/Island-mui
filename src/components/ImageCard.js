import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import { Zoom } from '@mui/material';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            maxWidth: "30rem",
            background: "rgba(0,0,0,0.5)",
            margin: "1.15rem"
        },
        title: {
            fontWeight: 'bold',
            fontSize: "2rem",
            color: "#FFF"
        },
        desc: {
            color: "#ccbfbf",
            fontWeight: "initial"
        }
    };
});

export default function ImageCard(props) {
    const { classes } = useStyles();
    return (
        < Zoom in= { props.checked } style = {{ transitionDelay: props.checked ? '500ms' : '0ms' }}>

    <Card className={classes.root}>
        <CardMedia
            sx={{ height: "21rem" }}
            image={props.image}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                {props.title}
            </Typography>
            <Typography variant="body2" className={classes.desc}>
                {props.desc}
            </Typography>
        </CardContent>
    </Card>
  
  </Zoom >
    );
}
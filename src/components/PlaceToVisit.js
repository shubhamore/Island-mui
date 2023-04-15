import React from 'react'
import { makeStyles } from 'tss-react/mui';
import ImageCard from "./ImageCard"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles()((theme) => {
    return {
        root:{
            minHeight:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            [theme.breakpoints.down("sm")]:{
                flexDirection:"column",
            }
        }
    };
});

export default function PlaceToVisit() {
    const { classes } = useStyles();
    const checked=useWindowPosition("header")
    return (
        <div className={classes.root} id="place-to-visit">
            <ImageCard checked={checked} image={c1} title="shubham" desc="loLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ipsum id odio finibus lacinia. Curabitur ut condimentum nisl. In molestie id lorem sit amet vestibulum. Etiam ut tellus eleifend, dapibus massa aliquet, bibendum nulla. Ut quam quam, luctus quis urna sit amet, lobortis sollicitudin quam. Donec in eleifend mi"/>
            <ImageCard checked={checked} image={c2} title="more" desc="loLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ipsum id odio finibus lacinia. Curabitur ut condimentum nisl. In molestie id lorem sit amet vestibulum. Etiam ut tellus eleifend, dapibus massa aliquet, bibendum nulla. Ut quam quam, luctus quis urna sit amet, lobortis sollicitudin quam. Donec in eleifend mi"/>
        </div>
    )
}

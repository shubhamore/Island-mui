import { CssBaseline } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import bg from "./assets/bg.jpg"
import Header from "./components/Header"
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      minHeight: "100vh",
      background:`linear-gradient(to bottom, rgba(0,0,0, .25), rgba(0,0,0, .4)), url(${bg}) `,
      backgroundRepeat:'no-repeat',
      backgroundSize:"cover",
    },
  };
});

function App() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <PlaceToVisit/>
    </div>
  );
}

export default App;

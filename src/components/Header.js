import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        },
        appbar: {
            background: "none",
            fontFamily: 'Ubuntu',
        },
        icon: {
            color: "#fff",
            fontSize: "2.5rem"
        },
        appbarTitle: {
            flexGrow: "1"
        },
        appbarWrapper: {
            background: "linear-gradient(90deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.35) 100%)",
            borderRadius: "45px",
            width: "80%",
            margin: "10px auto",
        },
        colorText: {
            color: "#4ec1ff"
        },
        title: {
            textAlign: "center",
            fontFamily: 'Ubuntu',
            fontSize: "4rem",
            color: "#FFF"
        },
        godown: {
            color: "#FFF",
            fontSize: "2.5rem"
        },
        container: {
            textAlign: "center"
        }
    };
});

export default function Header() {
    const { classes } = useStyles();
    const [checked, setChecked] = React.useState(false);
    React.useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Island</span>.</h1>
                    <IconButton>
                        <MenuIcon className={classes.icon}></MenuIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} collapsedSize={50} {...(checked ? { timeout: 1000 } : {})}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> My<span className={classes.colorText}>Island</span>.
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <KeyboardDoubleArrowDownIcon className={classes.godown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}

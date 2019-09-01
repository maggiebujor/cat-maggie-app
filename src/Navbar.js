import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));



function Navbar(props){
    const classes = useStyles();


    const navBarStyle = {
      backgroundColor: 'blue',
      padding: "1.5% 1%",
    }

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
    }

    const specialButtonStyle = {
      border: '3px solid white',
      color:'white',
      width: '100px',
      height: '55px',
      borderRadius: '5%',
      textDecoration: 'none',
    }

    return (
    <div className={classes.root}>
      <Box
        display='flex'
        flex-direction='row'
        justifyContent='space-between'
        style={navBarStyle}
      >
        
        
        <Box
          display='flex'
          flex-direction='row'
          justifyContent='space-evenly'
          color="inherit"
          width="45%"
        >
          <Button color="inherit"><Link style={linkStyle} to="/">Stuff</Link></Button>
          <Button color="inherit"><Link style={linkStyle} to="/">Stuff</Link></Button>
          <Button color="inherit"><Link style={linkStyle} to="/">More Stuff</Link></Button>


        </Box>
      </Box>
    </div>
    );

}
export default Navbar;

import React from 'react';
import Navbar from './Navbar.js'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Home() {
  const classes = useStyles();

  const imageBoxStyle = {
    height:'825px',
    overflow: 'hidden',
    position: 'relative',
  }

  const overlayBoxStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    // top: '13%',
    // left: '30%',
    // backgroundImage: 'linear-gradient(to top, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.6) 100%)',
    // background: 'rgba(61, 92, 119, 0.6)'
  }

  const imageStyle = {
    height:'auto',
    width: '100%',
    filter: 'brightness(65%)',
    // filter: 'blur(1px)',
    position: 'absolute',
    top: '0',
    left: '0'
  }

  const overlayBoxText = {
    position: 'relative',
    paddingLeft: '10%',
    paddingRight: '10%',
    color: 'white',
    zIndex: '5',
    textAlign: 'left',
    // top: '25%',
    // left: '15%',
  }

  const heroTitle = {
    fontSize: '60px',
    fontWeight: 'normal',
    marginBottom: '5px'
  }
  const heroTagline = {
    fontSize: '30px',
    fontWeight: 'normal'
  }

  const buttonStyle = {
    backgroundColor: '#73C2FB',
    // backgroundColor: '#FFA711',
    width: '150px',
    height: '70px',
    fontSize: '24px',
    color: 'white',
    textTransform: 'capitalize',
    borderRadius: '5%',
    marginTop: '20px'
  }

  const section = {
    display: 'flex',
    width: '100%',
    height: '600px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
    marginBottom: '150px',
  }

  const info = {
    display: 'flex',
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left'
  }

  const infoImg1 = {
    display: 'flex',
    width: '40%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  
  const infoImg2 = {
    display: 'flex',
    width: '40%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
  const h3 = {
    textAlign: 'left',
    lineHeight: '1.2',
    textDecoration: 'underline',
    textDecorationColor: '#73C2FB'
    // color: '#73C2FB'
  }
  const h4 = {
    textAlign: 'left',
    fontSize: '26px',
    marginTop: '25px',
    lineHeight: '2'
  }
  const imgStyle = {
    width: '75%',
    boxShadow: '-15px 15px 30px #73C2FB',
    borderRadius:'50%'
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <div>
      <Navbar/>
      <h3>HI THIS IS ME AND MY NAME IS MAGGIE</h3>

    </div>
  );

}
export default Home;
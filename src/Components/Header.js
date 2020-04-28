import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),    
  },
  title: {
    flexGrow: 1,
  },
  header:{
    flexShrink: 0,    
  },
  appbar:{ 

  }
}));


function TopBar(){
  const classes = useStyles();
  return(
    <AppBar position="static" >
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
      News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
    );
}

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <div className={classes.header}>
    <Container maxWidth="lg">
    <TopBar />
    </Container>
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
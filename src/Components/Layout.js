import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  layout: {
 	flexGrow:1,
  },
   root: {    
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  }
}));


function SocialMedia(){
	const classes = useStyles();
	return(
		  <div className={classes.root}>
	      <Avatar>
	        <InstagramIcon />
	      </Avatar>
	      <Avatar className={classes.pink}>
	        <GitHubIcon />
	      </Avatar>
	      <Avatar className={classes.green}>
	        <LinkedInIcon />
	      </Avatar>
	    </div>
	);
}

export default function Layout(props) {
	const classes = useStyles();
	return (
		<div className ={classes.layout}>
		<Container maxWidth="lg">
			This is My layout for now			
		</Container>
		<SocialMedia />
		</div>
	);
}
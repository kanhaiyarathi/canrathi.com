import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Layout from './Components/Layout';

const useStyles = makeStyles((theme) => ({
  appdivision: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className= {classes.appdivision}> 
      <Header title="This is the Header Title"/> 
      <Layout />
      <Footer description="lets add some description as well to this footer" title="This is the Footer Title"/>
    </div>
  );
}

export default App;
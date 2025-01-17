import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './Header';
function Home() {
  return (
    <>
   <Header/>
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page!
      </Typography>
      <Typography variant="body1" >
        This is a simple home page. You can use it as the starting point for your application.
      </Typography>
      
      <Link to="/sign-up" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Go to Sign Up
        </Button>
      </Link>
    </Container>
    </>
  );
}

export default Home;

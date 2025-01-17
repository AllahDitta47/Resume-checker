import React from "react";
import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";  
function SignIn() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Sign In
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Full Name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email Address" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" type="password" fullWidth />
              </Grid>
              <Grid item xs={12}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" fullWidth>
                  Sign In
                </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SignIn;

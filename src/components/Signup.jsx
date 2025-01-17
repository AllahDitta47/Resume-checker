import React from "react";
import { Card, CardContent, Grid, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";  // Import the Link component

function SignUp() {
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
              Sign Up
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
                {/* Wrap the button in a Link component to navigate to sign-in page */}
                <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" fullWidth>
                    Sign Up
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

export default SignUp;

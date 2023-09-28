import React, { useState } from "react";
import { Grid, Card, CardContent, Button, Typography } from "@mui/material";

export const Color = () => {
  const [input, setInput] = useState("#a84d88");

  return (
    <Card sx={{ bgcolor: input, height: 500 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" align="center" margin={9}>
                  Assignment 19
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    setInput("red");
                  }}
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Red
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    setInput("yellow");
                  }}
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Yellow
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    setInput("green");
                  }}
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Green
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    setInput("orange");
                  }}
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Orange
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

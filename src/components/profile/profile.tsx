import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Users from '../users/Users';
import { useStyles } from "./Profile.css";

export default function Profile() {

  const classes = useStyles();

  return (<Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Users />
      </Paper>
    </Grid>
  </Grid>);
}

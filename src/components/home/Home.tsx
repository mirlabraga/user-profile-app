import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Chart from '../dashboard/Chart';
import Deposits from '../dashboard/Deposits';
import clsx from 'clsx';
import { useStyles } from "./Home.css";

export default function Home() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (<Grid container spacing={3}>
    <Grid item xs={12} md={8} lg={9}>
      <Paper className={fixedHeightPaper}>
        <Chart />
      </Paper>
    </Grid>
    <Grid item xs={12} md={4} lg={3}>
      <Paper className={fixedHeightPaper}>
        <Deposits />
      </Paper>
    </Grid>

  </Grid>);
}

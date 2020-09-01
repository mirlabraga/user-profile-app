import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface UsersFormProps {
  numSelected: number;
  user: any;
}

export default function UsersForm(props: UsersFormProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log('props inside UsersForm', props.user)
  return (
    <Grid container spacing={3}>
    <Grid item xs={12} md={8} lg={9}>
      <Paper className={fixedHeightPaper}>
      <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder={props.user.id}
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={props.user.id}
          variant="outlined"
        />
        <TextField
          label="None"
          id="outlined-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          label="Dense"
          id="outlined-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="outlined"
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
      </Paper>
      </Grid>
    </Grid>
  );
}

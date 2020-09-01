import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import clsx from 'clsx';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from 'react-router-dom';
import { users } from '../../models/users';
import { TransitionProps } from '@material-ui/core/transitions';

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
      height: 440,
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

export default function UserForm(props: UsersFormProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { user } = props;
  const [firstName, setFirstName] = React.useState<string>(props.user.first_name);
  const history = useHistory();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateUser = (event: any) => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == user.id) {
        //users[i].first_name = firstName;
      }
    }
  }

  console.log('props inside UsersForm', props.user)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <TextField
            id="outlined-full-width"
            label="First Name"
            style={{ margin: 8 }}
            placeholder={props.user.id}
            fullWidth
            margin="normal"
            value={firstName}
            variant="outlined"
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setFirstName(props.target.value);
                return;
              }
            }}
          />
          <TextField
            label="Other Names"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            variant="outlined"
            value={props.user.other_names}
          />
          <TextField
            label="Mobile"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            value={props.user.mobile}
          />
          <TextField
            label="Email"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={props.user.email}
          />
          <TextField
            label="Normal"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={props.user.company}
          />
          <Grid container alignItems="flex-end" justify="flex-end" direction="row">
            <Grid item xs={2}>
              <Button type="submit"
                variant="contained"
                color="primary"
                endIcon={<SaveIcon />}
                onClick={(event: any) => updateUser(event)}
                >
                Save
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button type="submit"
                variant="contained"
                color="primary"
                endIcon={<CancelIcon />}
                onClick={() => { history.push("/dashboard") }}
              >
                Cancel
          </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import clsx from 'clsx';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useStyles } from "./UserForm.css";
import { useHistory } from 'react-router-dom';

interface UsersFormProps {
  user: any;
  onOpenForm: (open: boolean) => void;
}

export default function UserForm(props: UsersFormProps) {
  const classes = useStyles();
  const { user } = props;
  const [firstName, setFirstName] = React.useState<string>(props.user.first_name);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [disable, setDisable] = React.useState(false);
  const history = useHistory();

  const handleClose = () => {
    props.onOpenForm(false);
    history.push("/dashboard")
  };

  const updateUser = (event: any) => {
    setDisable(true);
  }

  return (
      <Grid item xs={6} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <TextField
            label="First Name"
            id="outlined-full-width"
            style={{ margin: 8 }}
            defaultValue="Default Value"
            className={classes.textField}
            variant="outlined"
            disabled={disable}
            value={firstName}
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
            disabled={disable}
            value={props.user.other_names}
          />
          <TextField
            label="Mobile"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            margin="dense"
            disabled={disable}
            variant="outlined"
            value={props.user.mobile}
          />
          <TextField
            label="Email"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={props.user.email}
          />
          <TextField
            label="Company"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={props.user.company}
          />
          <TextField
            label="Address Street"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={props.user.address.street}
          />

          <TextField
            label="Address Town"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={props.user.address.town}
          />

          <TextField
            label="Address County"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={props.user.address.county}
          />

          <TextField
            label="Address Postcode"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={props.user.address.postcode}
          />
          <Grid container alignItems="flex-end" justify="flex-end" direction="row">
            <Grid item xs={2}>
              {
                !disable ?
                  <Button type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<SaveIcon />}
                    onClick={(event: any) => updateUser(event)}
                  >
                    Save
                </Button> :
                  <div></div>
              }

            </Grid>
            <Grid item xs={2}>
              {
                !disable ?
                  <Button type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<CancelIcon />}
                    onClick={(event: any) => handleClose()}
                    hidden={disable}
                  >
                    Cancel
              </Button> : <div></div>
              }

            </Grid>
            <Grid item xs={2}>
              {
                disable ?

                  <Button type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<CancelIcon />}
                    onClick={(event: any) => handleClose()}
                    hidden={!disable}
                  >
                    Back
              </Button>
                  : <div></div>
              }
            </Grid>
          </Grid>
        </Paper>
    </Grid>
  );
}

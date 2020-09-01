import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import clsx from 'clsx';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useStyles } from "./UserForm.css";
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

interface UsersFormProps {
  user: any;
  onOpenForm: (open: boolean) => void;
}

export default function UserForm(props: UsersFormProps) {
  const classes = useStyles();
  const { user } = props;
  const [firstName, setFirstName] = React.useState<string>(props.user.first_name);
  const [otherNames, setOtherNames] = React.useState<string>(props.user.other_names);
  const [mobile, setMobile] = React.useState<string>(props.user.mobile);
  const [email, setEmail] = React.useState<string>(props.user.email);
  const [company, setCompany] = React.useState<string>(props.user.company);
  const [street, setStreet] = React.useState<string>(props.user.address.street);
  const [county, setCounty] = React.useState<string>(props.user.address.county);
  const [town, setTown] = React.useState<string>(props.user.address.town);
  const [postcode, setPostcode] = React.useState<string>(props.user.address.postcode);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [disable, setDisable] = React.useState(false);
  const history = useHistory();

  const handleClose = () => {
    props.onOpenForm(false);
  };

  const handleBack = () => {
    props.onOpenForm(false);
    history.push("/dashboard")
  };

  const updateUser = (event: any) => {
    setDisable(true);
  }

  return (
      <Paper className={fixedHeightPaper}>
      <Grid container justify = "center" item xs={3} md={8} lg={9}>
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
            value={otherNames}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setOtherNames(props.target.value);
                return;
              }
            }}
          />
          <TextField
            label="Mobile"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            margin="dense"
            disabled={disable}
            variant="outlined"
            value={mobile}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setMobile(props.target.value);
                return;
              }
            }}
          />
          <TextField
            label="Email"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setEmail(props.target.value);
                return;
              }
            }}
          />
          <TextField
            label="Company"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={company}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setCompany(props.target.value);
                return;
              }
            }}
          />
          <TextField
            label="Address Street"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={street}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setStreet(props.target.value);
                return;
              }
            }}
          />

          <TextField
            label="Address Town"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={town}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setTown(props.target.value);
                return;
              }
            }}
          />

          <TextField
            label="Address County"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={county}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setCounty(props.target.value);
                return;
              }
            }}
          />

          <TextField
            label="Address Postcode"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            disabled={disable}
            margin="normal"
            variant="outlined"
            value={postcode}
            onChange={(props: any) => {
              if (props && props.target && props.target.value) {
                setPostcode(props.target.value);
                return;
              }
            }}
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
                    endIcon={<ArrowBackIosIcon />}
                    onClick={(event: any) => handleBack()}
                    hidden={!disable}
                  >
                    Back
              </Button>
                  : <div></div>
              }
            </Grid>
          </Grid>
    </Grid>
        </Paper>
  );
}

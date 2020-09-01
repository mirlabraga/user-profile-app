import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import UserForm from '../UserForm/UserForm';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useToolbarStyles } from "./UsersListToolbar.css";

interface UsersListToolbarProps {
  numSelected: number;
  users: any;
}

export default function UsersListToolbar (props: UsersListToolbarProps) {
  const classes = useToolbarStyles();
  const { numSelected, users } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    try {
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => <UserForm onOpenForm={setOpen} user={users[0]} />);

  return (
    <div>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="primary" variant="subtitle1" component="div">
            {users[0].first_name} selected
          </Typography>
        ) : (
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
              Users
            </Typography>
          )}

        {numSelected > 0 ? (
          <Tooltip title="Edit">
            <IconButton aria-label="edit" onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
      </Toolbar>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}  classes={{ paper: classes.fullDialog }}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.titleDialog}>
              Sound
        </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
        </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

UsersListToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

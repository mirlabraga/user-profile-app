import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Link as RouterLink, useHistory } from 'react-router-dom';
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
import UserForm from './UserForm';
import FilterListIcon from '@material-ui/icons/FilterList';
import UsersListHead from './UsersListHead';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.primary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
  appBar: {
    position: 'relative',
  },
  titleDialog: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

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

  const Transition = React.forwardRef<unknown, TransitionProps>((props) => <UserForm numSelected={numSelected} user={users[0]} />);

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
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
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

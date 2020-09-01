import React from 'react';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon } from "@material-ui/core";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems , logoutListItems} from './listItems';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  }
}));

export interface PropMenuTypes {
  onChange: (menu: string) => void;
}

export default function Menu(props: PropMenuTypes) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = async (target: string) => {
    try {
      history.push(target);
    } catch (error) {
      console.error("[error] something happen when the menu was selected!")
    }
  };

  return (
    <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" onClick={() => handleClick('/')} />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" onClick={() => handleClick('/profile')} />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
        <Divider />
        <List>{logoutListItems}</List>
      </Drawer>
  );
}

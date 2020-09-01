import React from 'react';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon } from "@material-ui/core";
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems , logoutListItems} from './listItems';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import { useStyles } from "./Menu.css";

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

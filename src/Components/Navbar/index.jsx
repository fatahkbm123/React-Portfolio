import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import useStyles from "../../StyleComponent";
import DrawerComponent from "./Sub/Drawer";

import PopoverIcons from "./Sub/Popover";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography className={classes.hamburger}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Typography>

            <PopoverIcons />
          </Toolbar>
        </Container>
      </AppBar>

      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />

      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main> */}
    </div>
  );
}

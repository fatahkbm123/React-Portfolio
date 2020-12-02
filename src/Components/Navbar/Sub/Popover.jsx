import React, { useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../../StyleComponent";

export default function PopoverIcons() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = useState(null);

  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);

  return (
    <>
      <Typography>
        <IconButton
          className={classes.iconButton}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          aria-owns={open2 ? "mouse-over-popover2" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen2}
          onMouseLeave={handlePopoverClose2}
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Typography>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography className={classes.fontPopover}>Github</Typography>
      </Popover>

      <Popover
        id="mouse-over-popover2"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open2}
        anchorEl={anchorEl2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose2}
        disableRestoreFocus
      >
        <Typography className={classes.fontPopover}>Intagram</Typography>
      </Popover>
    </>
  );
}

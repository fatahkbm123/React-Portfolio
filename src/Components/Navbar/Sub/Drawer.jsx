import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import useStyles from "../../../StyleComponent";
import { Typography, useTheme } from "@material-ui/core";
import Images from "../../../fatah.jpg";

export default function DrawerComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerClose } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography style={{ position: "relative" }} className={classes.images}>
          <img src={Images} alt="my Images" className={classes.myFoto} />
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon className={classes.iconButton} />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      {["Home", "Work", "About"].map((text) => (
        <List className={classes.iconButton} key={text}>
          <ListItem button>
            <ListItemIcon>
              <CodeIcon className={classes.iconButton} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </List>
      ))}
      <Divider />
    </Drawer>
  );
}

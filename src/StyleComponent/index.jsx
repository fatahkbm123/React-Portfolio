import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#333333",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    justifyContent: "end",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: "#424242",
    width: drawerWidth,
    boxShadow: "0 0 5px rgba(0, 0, 0, .3)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    boxShadow: "0 0 5px black",
    marginLeft: -drawerWidth,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  iconButton: {
    color: "white",
  },

  hamburger: {
    flexGrow: 1,
  },

  images: {
    padding: 20,
    width: "140px",
  },

  myFoto: {
    width: "100%",
    borderRadius: "50%",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  },

  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: "5px 8px",
  },

  fontPopover: {
    fontSize: 12,
  },
}));

export default useStyles;

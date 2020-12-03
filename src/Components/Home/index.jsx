import React from "react";
import { Container, Typography, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Particle from "./Sub/Particle";
import useStyles from "../../StyleComponent";

function Home() {
  const classes = useStyles();
  return (
    <>
      <Particle />
      <Container className={classes.Home}>
        <div className="Home">
          <div
            style={{
              position: "absolute",
              top: 150,
            }}
          >
            <Typography variant="h4" className={classes.font1}>
              Hello, I'm
            </Typography>
            <Typography variant="h4" className="name">
              Fatah Noer
            </Typography>
            <Typography variant="h4" className={classes.font3}>
              Front End Developer
            </Typography>
            <IconButton
              style={{ marginTop: 150, marginLeft: "-15px" }}
              className="arrow"
              color="inherit"
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

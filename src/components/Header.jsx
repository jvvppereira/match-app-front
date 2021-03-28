import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Filter from "./Filter/Filter";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "auto",
    background: "#9412dc",
    paddingBottom: "20px",
    color: "white",
    position: "sticky",
    top: "0",
  },
  title: {
    paddingTop: "10px",
    margin: "0 auto 0",
    width: "260px",
  },
  icon: {
    float: "left",
    marginRight: "10px",
  },
});

export default function Header({ setFilters }) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Avatar
          className={classes.icon}
          alt="match app icon"
          src="./../../favicon.ico"
        />
        <Typography variant="h4">Match App</Typography>
      </div>
      <Filter setFilters={setFilters} />
    </header>
  );
}

import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "60px",
    background: "#9412dc",
    fontSize: "20px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: "0",
  },
});

export default function Header() {
  const classes = useStyles();
  return <header className={classes.header}>Match App</header>;
}

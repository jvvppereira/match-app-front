import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  },
  text: {
      padding: ' 20px'
  }
});

export default function NoDataFound() {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <Typography className={classes.text} variant="h6">Não há candidatos com estes filtros</Typography>
    </Card>
  );
}

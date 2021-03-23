import { makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

export default function CandidateSkeleton({
  showSkeleton,
  size,
  text,
  float = "none",
}) {
  let width;
  switch (size) {
    case "small":
      width = "25%";
      break;

    case "large":
      width = "100%";
      break;

    default:
      width = "50%";
      break;
  }

  const useStyles = makeStyles({
    skeleton: {
      width,
      float,
    },
  });

  const classes = useStyles();

  return (
    <div>{showSkeleton ? <Skeleton className={classes.skeleton} /> : text}</div>
  );
}

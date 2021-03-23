import { makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

export default function CandidateSkeleton({
  candidate,
  infoType,
  size,
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

  let text;
  switch (infoType) {
    case "id":
      text = candidate.idText;
      break;
    case "experience":
      text = candidate.experienceText;
      break;
    case "city":
      text = candidate.cityText;
      break;
    default:
      text = candidate.technologiesText;
      break;
  }

  const classes = useStyles();

  return (
    <div>
      {candidate.isEmpty ? <Skeleton className={classes.skeleton} /> : text}
    </div>
  );
}

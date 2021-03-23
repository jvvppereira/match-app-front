import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CandidateSkeleton from "./CandidateSkeleton";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px",
  },
  candidateId: {
    float: "left",
    width: "50%",
    fontStyle: "italic",
  },
  experience: {
    float: "right",
    width: "50%",
    fontWeight: "bold",
    textAlign: "right",
  },
  city: {
    display: "inline-block",
    marginBottom: "0",
    width: "50%",
  },
});

export default function Candidate({ candidate }) {
  const classes = useStyles();

  const technologiesList = candidate.technologies
    .reduce(
      (acumulator, currentTechnology) =>
        `${acumulator}, ${currentTechnology.name}${
          currentTechnology.is_main_tech ? "*" : ""
        }`,
      ""
    )
    .slice(1);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <i className={classes.candidateId}>
          <CandidateSkeleton
            showSkeleton={candidate.isEmpty}
            size="medium"
            text={`Candidato #${candidate.id}`}
          />
        </i>
        <b className={classes.experience}>
          <CandidateSkeleton
            className={classes.experienceSkeleton}
            showSkeleton={candidate.isEmpty}
            size="medium"
            float="right"
            text={`Experiência: ${candidate.experience.replace(
              "years",
              "anos"
            )}`}
          />
        </b>
        <p className={classes.city}>
          <CandidateSkeleton
            showSkeleton={candidate.isEmpty}
            size="medium"
            text={`Cidade: ${candidate.city}`}
          />
        </p>
        <p>
          <CandidateSkeleton
            showSkeleton={candidate.isEmpty}
            size="large"
            text={`Tecnologias: ${technologiesList}`}
          />
        </p>
      </CardContent>
    </Card>
  );
}

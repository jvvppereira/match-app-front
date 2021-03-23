import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";
import CandidateSkeleton from "./CandidateSkeleton";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px",
  },
  candidateId: {
    float: "left",
    fontStyle: "italic",
    width: "50%",
  },
  experience: {
    float: "right",
    fontWeight: "bold",
    textAlign: "right",
    width: "50%",
  },
  city: {
    display: "inline-block",
    width: "50%",
    margin: "16px 0",
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
        <div className={classes.city}>
          <CandidateSkeleton
            showSkeleton={candidate.isEmpty}
            size="medium"
            text={`Cidade: ${candidate.city}`}
          />
        </div>
        <div>
          <CandidateSkeleton
            showSkeleton={candidate.isEmpty}
            size="large"
            text={`Tecnologias: ${technologiesList}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}

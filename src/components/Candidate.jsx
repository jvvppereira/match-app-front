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

  candidate.idText = `Candidato #${candidate.id}`;
  candidate.experienceText = `Experiência: ${candidate.experience.replace(
    "years",
    "anos"
  )}`;
  candidate.cityText = `Cidade: ${candidate.city}`;
  candidate.technologiesText = `Tecnologias: ${technologiesList}`;

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <i className={classes.candidateId}>
          <CandidateSkeleton candidate={candidate} infoType={"id"} />
        </i>
        <b className={classes.experience}>
          <CandidateSkeleton
            candidate={candidate}
            infoType={"experience"}
            float="right"
          />
        </b>
        <div className={classes.city}>
          <CandidateSkeleton candidate={candidate} infoType={"city"} />
        </div>
        <div>
          <CandidateSkeleton
            candidate={candidate}
            infoType={"technologies"}
            size="large"
          />
        </div>
      </CardContent>
    </Card>
  );
}

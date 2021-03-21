import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px",
  },
  experience: {
    float: "right",
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
        <i>Candidato #{candidate.id}</i>
        <b className={classes.experience}>
          Experiência: {candidate.experience.replace("years", "anos")}
        </b>
        <p>Cidade: {candidate.city}</p>

        <p>Tecnologias: {technologiesList}</p>
      </CardContent>
    </Card>
  );
}

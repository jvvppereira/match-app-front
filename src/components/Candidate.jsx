import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px",
  },
});

export default function Candidate({ candidate }) {
  const classes = useStyles();

  const technologiesList = candidate.technologies
    .reduce(
      (acumulator, currentTechnology) =>
        `${acumulator}, ${currentTechnology.name}`,
      ""
    )
    .slice(1);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <i>Candidato #{candidate.id}</i>
        <br></br>
        <br></br>
        <strong>
          Experiência: {candidate.experience.replace("years", "anos")}
        </strong>
        <p>Cidade: {candidate.city}</p>

        <p>Tecnologias: {technologiesList}</p>
      </CardContent>
    </Card>
  );
}

import {
  CardContent,
  Collapse,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import ChipDefault from "./ChipDefault";

const useStyles = makeStyles({
  title: {
    marginBottom: "10px",
  },
  button: {
    float: "right",
    marginBottom: "16px",
  },
});
export default function CollapsedFilter({
  expanded,
  selectedValues,
  handleExpandClick,
}) {
  const [
    selectedCities,
    selectedExperiences,
    selectedTechnologies,
    wayToFilterTechnologies,
  ] = selectedValues;

  const classes = useStyles();

  return (
    <Collapse in={!expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Filtros selecionados
        </Typography>
        <ChipDefault type="city" values={selectedCities} />
        <ChipDefault type="experience" values={selectedExperiences} />
        <ChipDefault type="technology" values={selectedTechnologies} />
        <ChipDefault
          type="wayToFilterTechnologies"
          values={wayToFilterTechnologies}
        />

        <IconButton
          color="primary"
          size="small"
          className={classes.button}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
    </Collapse>
  );
}

import {
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import ChipDefault from "./ChipDefault";

export default function CollapsedFilter({
  expanded,
  selectedValues,
  handleExpandClick,
  style,
}) {
  const [
    selectedCities,
    selectedExperiences,
    selectedTechnologies,
    wayToFilterTechnologies,
  ] = selectedValues;

  return (
    <Collapse in={!expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography variant="h6" className={style.title}>
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
          className={style.button}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
    </Collapse>
  );
}

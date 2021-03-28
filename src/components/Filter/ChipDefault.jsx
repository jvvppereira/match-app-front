import { Chip, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  chip: {
    marginBottom: "8px",
    marginRight: "8px",
  },
});

export default function ChipDefault({ type, values }) {
  const classes = useStyles();
  let label;
  switch (type) {
    case "city":
      label = "Cidades";
      break;
    case "experience":
      label = "Experiências";
      break;
    case "technology":
      label = "Tecnologias";
      break;
    default:
      label = "Atender a todas as tecnologias";
      break;
  }

  const replaceYearsText = (text) => {
    return type === "experience" ? text.replace("years", "anos") : text;
  };
  
  const getListSplittedByComma = (list) => {
    return list.reduce(
      (acumulator, currentValue) =>
        `${acumulator}, ${replaceYearsText(currentValue)}`,
      ""
    );
  };

  const formatSelectedValues = (selectedValues) => {
    if (Array.isArray(selectedValues)) {
      if (selectedValues.length === 0) {
        return "Todas";
      }
      return getListSplittedByComma(selectedValues).slice(1);
    } else {
      return selectedValues ? "Sim" : "Não";
    }
  };
  return (
    <Chip
      className={classes.chip}
      size="small"
      label={`${label}: ${formatSelectedValues(values)}`}
    />
  );
}

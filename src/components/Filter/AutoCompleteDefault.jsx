import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

const useStyles = makeStyles({
  autocomplete: {
    marginBottom: "20px",
  },
});

export default function AutoCompleteDefault({
  type,
  options,
  setSelectedOptions,
  setWayToFilter,
  value,
}) {
  const classes = useStyles();

  let label;
  switch (type) {
    case "city":
      label = "Cidade";
      break;
    case "experience":
      label = "Experiência";
      break;
    default:
      label = "Tecnologias";
      break;
  }

  return (
    <div>
      <Autocomplete
        className={classes.autocomplete}
        size="small"
        multiple
        options={options}
        value={value}
        filterSelectedOptions
        onChange={(event, value) => setSelectedOptions(value)}
        noOptionsText="Nenhum valor encontrado"
        loadingText="Carregando..."
        clearText="Limpar"
        closeText="Fechar"
        openText="Abrir"
        getOptionLabel={(option) =>
          type === "experience" ? option.replace("years", "anos") : option
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label={label} />
        )}
      />
      {setWayToFilter && (
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => setWayToFilter(event.target.checked)}
              color="primary"
            />
          }
          label="Atender a todas as tecnologias"
        /> //TODO filter by main tech
      )}
    </div>
  );
}

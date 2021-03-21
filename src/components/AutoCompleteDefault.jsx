import { makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

const useStyles = makeStyles({
  autocomplete: {
    marginBottom: "20px",
  },
});

export default function AutoCompleteDefault({
  placeholder,
  options,
  setSelectedOptions,
}) {
  const classes = useStyles();
  return (
    <Autocomplete
      className={classes.autocomplete}
      size="small"
      multiple
      options={options}
      filterSelectedOptions
      onChange={(event, value) => setSelectedOptions(value)}
      noOptionsText="Nenhum valor encontrado"
      loadingText="Carregando..."
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder={placeholder} />
      )}
    />
  );
}

import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import service from "../services/Service";
import SearchIcon from "@material-ui/icons/Search";
import {
  Card,
  CardContent,
  Button,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  filter: {
    maxWidth: "760px",
    margin: "20px auto 0",
  },
  autocomplete: {
    marginBottom: "20px",
  },
  title: {
    marginBottom: "10px",
  },
  button: {
    marginLeft: "84.7%",
    background: "#9412dc",
    backgroundColor: "#9412dc",
  },
});

export default function Filter({ setFilters }) {
  const [citiesOption, setCitiesOption] = useState([]);
  const [experiencesOption, setExperiencesOption] = useState([]);
  const [technologiesOption, setTechnologiesOption] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const loadFilterOptions = async () => {
      const response = await service.get("/availableFilter");
      const {
        filters: { cities, experiences, technologies },
      } = response.data;

      setCitiesOption(cities);
      setExperiencesOption(experiences);
      setTechnologiesOption(technologies);
    };

    loadFilterOptions();
  }, []);

  const filterClick = () => {
    setFilters({
      cities: selectedCities,
      experiences: selectedExperiences,
      technologies: selectedTechnologies,
    });
  };

  return (
    <Card className={classes.filter} variant="outlined">
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Localize um candidato:
        </Typography>

        <Autocomplete
          className={classes.autocomplete}
          size="small"
          multiple
          options={citiesOption}
          filterSelectedOptions
          onChange={(event, value) => setSelectedCities(value)}
          noOptionsText="Nenhum valor encontrado"
          loadingText="Carregando..."
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder="Cidade" />
          )}
        />
        <Autocomplete
          className={classes.autocomplete}
          size="small"
          multiple
          options={experiencesOption}
          filterSelectedOptions
          onChange={(event, value) => setSelectedExperiences(value)}
          noOptionsText="Nenhum valor encontrado"
          loadingText="Carregando..."
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Experiência"
            />
          )}
        />
        <Autocomplete
          className={classes.autocomplete}
          size="small"
          multiple
          options={technologiesOption}
          filterSelectedOptions
          onChange={(event, value) => setSelectedTechnologies(value)}
          noOptionsText="Nenhum valor encontrado"
          loadingText="Carregando..."
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Tecnologias"
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SearchIcon></SearchIcon>}
          onClick={filterClick}
        >
          Filtrar
        </Button>
      </CardContent>
    </Card>
  );
}

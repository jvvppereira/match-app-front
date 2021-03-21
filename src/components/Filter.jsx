import React, { useEffect, useState } from "react";
import service from "../services/Service";
import SearchIcon from "@material-ui/icons/Search";
import {
  Card,
  CardContent,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AutoCompleteDefault from "./AutoCompleteDefault";

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
    float: "right",
    marginBottom: "16px",
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
        <AutoCompleteDefault
          placeholder="Cidade"
          options={citiesOption}
          setSelectedOptions={setSelectedCities}
        />
        <AutoCompleteDefault
          placeholder="Experiência"
          options={experiencesOption}
          setSelectedOptions={setSelectedExperiences}
        />
        <AutoCompleteDefault
          placeholder="Tecnologias"
          options={technologiesOption}
          setSelectedOptions={setSelectedTechnologies}
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

import { Button, CardContent, Collapse, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import service from "../../services/Service";
import AutoCompleteDefault from "./AutoCompleteDefault";
import SearchIcon from "@material-ui/icons/Search";

export default function ExpandedFilter({
  expanded,
  selectedValues,
  filterClick,
  style,
}) {
  const [citiesOption, setCitiesOption] = useState([]);
  const [experiencesOption, setExperiencesOption] = useState([]);
  const [technologiesOption, setTechnologiesOption] = useState([]);

  const [
    selectedCities,
    selectedExperiences,
    selectedTechnologies,
    wayToFilterTechnologies,
    setSelectedCities,
    setSelectedExperiences,
    setSelectedTechnologies,
    setWayToFilterTechnologies,
  ] = selectedValues;

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

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography variant="h6" className={style.title}>
          Localize um candidato
        </Typography>
        <AutoCompleteDefault
          type="city"
          options={citiesOption}
          value={selectedCities}
          setSelectedOptions={setSelectedCities}
        />
        <AutoCompleteDefault
          type="experience"
          options={experiencesOption}
          value={selectedExperiences}
          setSelectedOptions={setSelectedExperiences}
        />
        <AutoCompleteDefault
          type="technology"
          options={technologiesOption}
          value={selectedTechnologies}
          setSelectedOptions={setSelectedTechnologies}
          setWayToFilter={setWayToFilterTechnologies}
          wayToFilterValue={wayToFilterTechnologies}
        />
        <Button
          variant="contained"
          color="primary"
          className={style.button}
          endIcon={<SearchIcon></SearchIcon>}
          onClick={filterClick}
        >
          Filtrar
        </Button>
      </CardContent>
    </Collapse>
  );
}

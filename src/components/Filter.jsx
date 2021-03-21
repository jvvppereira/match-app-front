import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import service from "../services/Service";

export default function Filter() {
  const [citiesOption, setCitiesOption] = useState([]);
  const [experiencesOption, setExperiencesOption] = useState([]);
  const [technologiesOption, setTechnologiesOption] = useState([]);

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
    <div className="Card Filter">
      <strong>Localize um candidato:</strong>

      <Autocomplete
        multiple
        options={citiesOption}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Cidade" />
        )}
      />
      <Autocomplete
        multiple
        options={experiencesOption}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Experiência" />
        )}
      />
      <Autocomplete
        multiple
        options={technologiesOption}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Tecnologias" />
        )}
      />
    </div>
  );
}

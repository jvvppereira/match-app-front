import React, { useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import ExpandedFilter from "./ExpandedFilter";
import CollapsedFilter from "./CollapsedFilter";

const useStyles = makeStyles({
  filter: {
    margin: "10px auto 0",
    maxWidth: "700px",
  },
});

export default function Filter({ setFilters }) {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [wayToFilterTechnologies, setWayToFilterTechnologies] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const classes = useStyles();

  const selectedValues = [
    selectedCities,
    selectedExperiences,
    selectedTechnologies,
    wayToFilterTechnologies,
    setSelectedCities,
    setSelectedExperiences,
    setSelectedTechnologies,
    setWayToFilterTechnologies,
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const filterClick = () => {
    handleExpandClick();

    const filters = {};

    if (selectedCities.length > 0) {
      filters["cityName"] = {
        type: "IN",
        values: selectedCities,
      };
    }

    if (selectedExperiences.length > 0) {
      filters["experience.name"] = {
        type: "IN",
        values: selectedExperiences,
      };
    }

    if (selectedTechnologies.length > 0) {
      filters["candidate_technology.technology.name"] = {
        // type: wayToFilterTechnologies ? "AND" : "IN", //TODO FIX ME AT BACKEND
        type: "AND",
        values: selectedTechnologies,
      };
    }

    setFilters({
      filters,
    });
  };

  return (
    <Card className={classes.filter} variant="outlined">
      <ExpandedFilter
        expanded={expanded}
        selectedValues={selectedValues}
        filterClick={filterClick}
      />
      <CollapsedFilter
        expanded={expanded}
        selectedValues={selectedValues}
        handleExpandClick={handleExpandClick}
      />
    </Card>
  );
}

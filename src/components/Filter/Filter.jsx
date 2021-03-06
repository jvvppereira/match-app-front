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
    setFilters({
      cities: selectedCities,
      experiences: selectedExperiences,
      technologies: {
        wayToFilter: wayToFilterTechnologies ? "and" : "or",
        list: selectedTechnologies,
      },
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

import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import service from "../services/Service";
import Canidate from "./Candidate";
import Filter from "./Filter";

const useStyles = makeStyles({
  list: {
    maxWidth: "700px",
    margin: "20px auto 0",
    padding: "0 20px",
  },
});

export default function Main() {
  const [loadMore, setLoadMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const loadCandidates = async () => {
      setIsLoading(true);

      const response = await service.patch(
        `/candidate?page=${currentPage}`,
        filters
      );
      const { data: candidatesFromApi } = response.data;

      setCandidates((currentCandidates) => {
        if (loadMore) {
          return [...currentCandidates, ...candidatesFromApi];
        } else {
          return [...candidatesFromApi];
        }
      });

      setLoadMore(false);
      setIsLoading(false);
    };

    loadCandidates();
  }, [loadMore, filters]);

  useEffect(() => {
    const handleScroll = () => { //TODO review this routine
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setCurrentPage(currentPage + 1);
        setLoadMore(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Filter setFilters={setFilters} />
      <div className={classes.list}>
        {candidates.map((candidate) => (
          <Canidate key={candidate.id} candidate={candidate} />
        ))}
        {isLoading && "carregando..." /**TODO screen waiting backend */}
      </div>
    </div>
  );
}

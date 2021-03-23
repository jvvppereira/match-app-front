import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import service from "../services/Service";
import Candidate from "./Candidate";
import Filter from "./Filter";
import ListLoading from "./ListLoading";
import NoDataFound from "./NoDataFound";

const useStyles = makeStyles({
  list: {
    maxWidth: "700px",
    margin: "20px auto 0",
    padding: "0 20px",
  },
  main: {
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

  const loadCandidates = async () => {
    setIsLoading(true);

    !loadMore && setCandidates([]);

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

  useEffect(() => {
    loadCandidates();
  }, [loadMore, filters]);

  useEffect(() => {
    const handleScroll = () => {
      //TODO review this routine
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
    <div className={classes.main}>
      <Filter setFilters={setFilters} />
      <div className={classes.list}>
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} candidate={candidate} />
        ))}
        {isLoading && <ListLoading />}
        {!isLoading && candidates.length === 0 && <NoDataFound />}
      </div>
    </div>
  );
}

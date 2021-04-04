import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import service from "../services/Service";
import Candidate from "./Candidate";
import ListLoader from "./ListLoader";
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

export default function Main({ filters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPageAvailable, setLastPageAvailable] = useState();
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const loadCandidates = async (page = 1) => {
    if (
      (lastPageAvailable !== 0 && Number(lastPageAvailable) <= page - 1) ||
      isLoading
    ) {
      return;
    }
    setIsLoading(true);

    page === 1 && setCandidates([]);

    setCurrentPage(page);

    const response = await service.patch(
      `/candidate?rowsPerPage=20&page=${page}`,
      filters
    );
    const { data: candidatesFromApi, pages } = response.data;

    setLastPageAvailable(pages);

    setCandidates((currentCandidates) => {
      if (page > 1) {
        return [...currentCandidates, ...candidatesFromApi];
      } else {
        return [...candidatesFromApi];
      }
    });

    setIsLoading(false);
  };

  useEffect(() => {
    loadCandidates();
  }, [filters]);

  useEffect(() => { //TODO verify why stopped to works
    const handleScroll = () => {
      const LISTLOADER_HEIGTH = 600; //TODO verify how to show loader better
      if (
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight + LISTLOADER_HEIGTH / 3
      ) {
        loadCandidates(currentPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, isLoading]);

  return (
    <div className={classes.main}>
      <div className={classes.list}>
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} candidate={candidate} /> //TODO create a button to back to the top
        ))}
        {isLoading && <ListLoader />}
        {!isLoading && candidates.length === 0 && <NoDataFound />}
      </div>
    </div>
  );
}

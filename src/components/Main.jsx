import React, { useEffect, useState } from "react";
import service from "../services/Service";
import Card from "./Card";
import Filter from "./Filter";
export default function Main() {
  const [loadMore, setLoadMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //TODO screen waiting backend

  useEffect(() => {
    const loadCandidates = async () => {
      setIsLoading(true);

      const response = await service.get(`/candidate?page=${currentPage}`);
      const { data: candidatesFromApi, page } = response.data;

      setCurrentPage(page + 1);

      setCandidates((currentCandidates) => [
        ...currentCandidates,
        ...candidatesFromApi,
      ]);

      setLoadMore(false);
      setIsLoading(false);
    };

    loadCandidates();
  }, [loadMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLoadMore(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Main">
      <Filter />
      <div className="List" id="list">
        {candidates.map((candidate) => (
          <Card key={candidate.id} candidate={candidate} />
        ))}
        {isLoading && "carregando..."}
      </div>
    </div>
  );
}

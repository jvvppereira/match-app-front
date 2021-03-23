import React from "react";
import Candidate from "./Candidate";

export default function ListLoader() {
  const emptyCandidate = {
    technologies: [],
    experience: "",
    isEmpty: true,
  };

  const emptyCandidates = [];
  for (let index = 0; index < 4; index++) {
    emptyCandidate.id = index;
    emptyCandidates.push({...emptyCandidate});
  }

  return (
    <div>
      {emptyCandidates.map((candidate) => (
        <Candidate key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
}

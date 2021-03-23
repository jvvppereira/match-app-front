import React from "react";
import Candidate from "./Candidate";

export default function ListLoading() {
  const emptyCandidate = {
    technologies: [],
    experience: "",
    isEmpty: true,
  };

  const emptyCandidates = [];
  for (let index = 0; index < 4; index++) {
    emptyCandidates.push(emptyCandidate);
  }

  return (
    <div>
      {emptyCandidates.map((candidate) => (
        <Candidate candidate={candidate} />
      ))}
    </div>
  );
}

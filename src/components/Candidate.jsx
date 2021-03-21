import React from "react";
export default function Canidate({ candidate }) {
  const technologiesList = candidate.technologies
    .reduce(
      (acumulator, currentTechnology) =>
        `${acumulator}, ${currentTechnology.name}`,
      ""
    )
    .slice(1);

  return (
    <div className="Card">
      <i>Candidato #{candidate.id}</i>
      <br></br>
      <br></br>
      <strong>
        Experiência: {candidate.experience.replace("years", "anos")}
      </strong>
      <p>Cidade: {candidate.city}</p>

      <p>Tecnologias: {technologiesList}</p>
    </div>
  );
}

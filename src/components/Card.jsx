import React from "react";
export default function Card({ candidate }) {
  const technologiesList = candidate.technologies.reduce(
    (acumulador, currentTechnology) =>
      `${acumulador}, ${currentTechnology.name}`,
    ''
  ).slice(1);

  return (
    <div className="Card">
      <i>Candidato #{candidate.id}</i>
      <br></br>
      <br></br>
      <strong>
        Experiência: {candidate.experience.replace("years", "anos")}
      </strong>
      <p>Cidade: {candidate.city}</p>

      <p>
        Tecnologias:
        {technologiesList}
      </p>
    </div>
  );
}

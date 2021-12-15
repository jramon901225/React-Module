import React, { useEffect, useState } from "react";

import "./Render.css";

function Render() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=19"
      );
      console.table(response);
      const data = await response.json();
      console.log(data);
      setCards(data.results);
    };
    getUsers();
  }, []);

	const counter = () => {

	}
  const personajes = cards.map(({ image, name, status, species }) => (
    <div className="card">
      <div>
        <img className="imgContainer" src={image} alt="Personaje" />
      </div>
      <div className="infoContainer">
        <p>Name: {name} </p>
        <p>Status: {status} </p>
        <p>specie: {species}</p>
      </div>
    </div>
  ));

  return(
			<div>
		{personajes}
		</div>
	)
	
}

export default Render;

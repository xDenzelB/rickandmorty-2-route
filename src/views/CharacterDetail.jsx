import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacters] = useState({});


  useEffect(() => {
    async function getCharacter() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacters(data);
      
    }
    getCharacter();
  }, [])

  return (
    <div>
      <h2>{character.name}</h2>
      <img alt="image" src={character.image} />
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
    </div>
  )
}
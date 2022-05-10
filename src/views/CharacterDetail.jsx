import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from '../App.css';

export default function CharacterDetail({ characters = [] }) {
  const { id } = useParams();
  const [character, setCharacters] = useState({});


  useEffect(() => {
    async function getCharacter() {
      const chosenCharacter = characters.find((character) => character.id === Number(id));
      setCharacters(chosenCharacter);
      
    }
    getCharacter();
  }, [id])

  return (
    <div className={style.detail}>
      <h2>{character.name}</h2>
      <img alt="image" src={character.image} />
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
    </div>
  )
}
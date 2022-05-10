import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { characterFetch } from "../services/fetch-utils";

export default function CharacterList() {
  const { url, path } = useRouteMatch();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div>CharacterList</div>
  )
}

import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { characterFetch } from "../services/fetch-utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CharacterList() {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const gender = new URLSearchParams(location.search).get('gender') ?? 'all';
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  function genderChange(e) {
    history.push(`/?gender=${e.target.value}`);
  };

  useEffect(() => {
    async function getCharacters() {
      const fetch = characterFetch();
      setCharacters(fetch);
      setLoading(false);
    }
    getCharacters();
  }, [])
  return (
    <div>
      <h1>Rick and Morty Characters... Again!!</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
          <section>
            <label htmlFor="gender">Characters search by Gender</label>
            <select id="gender" value={gender} onChange={genderChange}>
              <option value='all'>All</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='unknown'>unknown</option>
            </select>
          </section>
      )}
    </div>
  )
}

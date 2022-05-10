import { useParams } from "react-router-dom";

export async function characterFetch() {
  const genderParam = new URLSearchParams(location.search).get('gender');

  const url =
    genderParam === 'all' || !genderParam
      ? 'https://rickandmortyapi.com/api/character'
      : `https://rickandmortyapi.com/api/character?gender=${genderParam}`;
  
  const res = await fetch(url);
  const { results } = await res.json();

  return results;
}
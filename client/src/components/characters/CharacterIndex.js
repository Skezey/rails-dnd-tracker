import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import DisplayCharacters from './displayCharacters'


const CharacterIndex = () => {
  const { getTokenSilently } = useAuth0();
  const token = getTokenSilently()
  return (
    <>
      <div className="mb-5">
        <h1>Characters</h1>
          <DisplayCharacters p={token}/>
      </div>
    </>
  );
};

export default CharacterIndex;

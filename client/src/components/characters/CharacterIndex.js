import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";
import Highlight from "../Highlight";
import DisplayCharacters from './displayCharacters'


const CharacterIndex = () => {
  const { getTokenSilently } = useAuth0();
  const token = getTokenSilently()
  return (
    <>
      <div className="mb-5">
        <h1>Characters</h1>
          <DisplayCharacters token={token}/>
      </div>
    </>
  );
};

export default CharacterIndex;

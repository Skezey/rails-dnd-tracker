import React from 'react';

const CharacterAttributes = (props) => (
  <div>
    <li>strength: {props.attributes[0].strength}</li>
    <li>charisma: {props.attributes[0].charisma}</li>
    <li>intelligence: {props.attributes[0].intelligence}</li>
    <li>dexterity: {props.attributes[0].dexterity}</li>
    <li>constitution: {props.attributes[0].constitution}</li>
    <li>wisdom: {props.attributes[0].wisdom}</li>
  </div>
)

export default CharacterAttributes;

import React from "React";
import { Person } from "../Types";

export const PersonCard = ({ person } : { person: Person }) => (
  <li>
    <p>{person.name}</p>
    <p>Gender: {person.gender}</p>
    <p>Age: {person.age}</p>
  </li>
)
import React from "React";
import { Person } from "../Types";

export const PersonCard = ({ person } : { person: Person }) => (
  <li>
    <p>{person.name}</p>
    <p>Gender: {person.gender}</p>
    <p>Age: {person.age}</p>
    <p>Favourite animal: {person.favourite_animal}</p>
    <p>Favourite color: <span style={{ color: person.favourite_color }}>~~~such wow~~~</span></p>
  </li>
)
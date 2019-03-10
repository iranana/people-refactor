import React from "React";
import { Person } from "../Types";

/**
 * Renders the card for a given person.
 */
export const PersonCard = ({ person } : { person: Person }) => (
  <li className="column is-3">
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          <span style={{ color: person.favourite_color }}>( ◠‿◠ )</span>&nbsp;
          {person.name}
        </p>
      </header>
      <div className="card-content">
        <ul>
          <li><strong>Age:</strong> {person.age}</li>  
          <li><strong>Gender:</strong> {person.gender}</li>
          <li><strong>Pet:</strong> {person.pet}</li>
        </ul>
      </div>
    </div>
  </li>
)
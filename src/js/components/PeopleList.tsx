import React from "react";
import { observer } from "mobx-react";
import { _fetch } from "../Utils";
import { PersonCard } from "./PersonCard";
import { IPromiseBasedObservable } from "mobx-utils";
import { Person } from "../Types";

/**
 * Renders list of PersonCards.
 */
export const PeopleList = observer(({ people } : { people: IPromiseBasedObservable<Person[]> }) => {
    if (people) {
      switch (people.state) {
        case "pending":
          return <p><span className="loader is-inline-block"></span> Loading people</p>
        case "rejected":
          return <div className="notification is-danger">Error {people.value.status} - {people.value.message}</div>
        case "fulfilled":
          return (
            people.value.length ?
              <>
                <h1 className="title is-4">{people.value.length} people found</h1>
                <ul className="columns is-multiline is-fluid">
                  {people.value.map(person => <PersonCard key={person._id} person={person} />)}
                </ul>
              </>
              :
              <p>No people found!</p>
          )
      }
    } else {
      return null
    }
})
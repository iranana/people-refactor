import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react";
import { _fetch } from "../Utils";
import { PersonCard } from "./PersonCard";
import { observable, action } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { Person } from "../Types";

/**
 * Renders list of PersonCards.
 */
@observer
class PeopleList extends React.Component<RouteComponentProps> {
  @observable people: IPromiseBasedObservable<Person[]>;

  @action fetchPeople (queryParams = '') {
    this.people = fromPromise(_fetch(`/api/people${queryParams}`));
  }
  
  componentDidMount () {
    this.fetchPeople(this.props.location.search);
  }

  componentDidUpdate (lastProps) {
    if (lastProps !== this.props) {
      this.fetchPeople(this.props.location.search);
    }
  }

  render () {
    if (this.people) {
      switch (this.people.state) {
        case "pending":
          return <p>Loading people</p>
        case "rejected":
          return <p>Error!</p>
        case "fulfilled":
          return (
            <ul>
              {this.people.value.map(person => <PersonCard key={person._id} person={person} />)}
            </ul>
          )
      }
    } else {
      return null
    }
  }
}


export { PeopleList }
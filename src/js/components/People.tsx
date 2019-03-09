import React from "react";
import { observer } from "mobx-react";
import { _fetch } from "../Utils";
import { observable, action } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { Person } from "../Types";
import { PeopleList } from "./PeopleList";
import { PeopleFilter } from "./PeopleFilter";

@observer
export class People extends React.Component<any> {
  @observable people: IPromiseBasedObservable<Person[]>;

  @action fetchPeople (queryParams = '') {
    this.people = fromPromise(_fetch(`/api/people${queryParams}`));
  }

  search = (query) => {
    this.props.history.push(`?${query}`);
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
    return (
      <>
        <PeopleFilter onSearch={this.search} />
        <PeopleList people={this.people} />
      </>
    )
  }
}
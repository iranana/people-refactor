import React from "react";
import { observer } from "mobx-react";
import { _fetch } from "../Utils";
import { observable, action, toJS } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { RouteComponentProps } from "react-router";
import queryString from "query-string";
import cleanDeep from "clean-deep";
import { Person, Filter } from "../Types";
import { PeopleList } from "./PeopleList";
import { PeopleFilter } from "./PeopleFilter";

/**
 * Contains state and logic for fetching/filtering people.
 * This might ordinarily be in a store, rather than the container itself.
 */
@observer
export class People extends React.Component<RouteComponentProps> {
  @observable people: IPromiseBasedObservable<Person[]>;
  @observable filter: Filter = {
    gender: "",
    minAge: "",
    maxAge: "",
    pet: ""
  };

  @action fetchPeople () {
    this.people = fromPromise(_fetch(`/api/people${this.props.location.search || ''}`));
  }

  @action updateFilter () {
    const query = queryString.parse(this.props.location.search);
    this.filter = {
      gender: query.gender as string || "",
      minAge: query.minAge as string || "",
      maxAge: query.maxAge as string || "",
      pet: query.pet as string || ""
    }
  }

  @action onFilterChange = (key, value) => {
    this.filter[key] = value;
  }

  onFilterSubmit = () => {
    let filter = toJS(this.filter);
    // Strip falsey values...
    let query = queryString.stringify(cleanDeep(filter));
    this.props.history.push(`?${query}`);
  }
  
  componentDidMount () {
    this.updateFilter();
    this.fetchPeople();
  }

  componentDidUpdate (lastProps) {
    if (lastProps !== this.props) {
      this.updateFilter();
      this.fetchPeople();
    }
  }

  render () {
    return (
      <>
        <PeopleFilter 
          {...this.props}
          onSubmit={this.onFilterSubmit} 
          onChange={this.onFilterChange} 
          filter={this.filter} />
        <PeopleList people={this.people} />
      </>
    )
  }
}
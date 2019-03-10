import React from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";
import { Filter } from "../Types";

type IPeopleFilter = {
  onSubmit: () => void, 
  onChange: (key: string, value: string) => void, 
  filter: Filter
}

/**
 * Renders a form with filter controls.
 */
@observer
class PeopleFilter extends React.Component<RouteComponentProps & IPeopleFilter> {
  onChange = (e) => {
    this.props.onChange(e.currentTarget.id, e.currentTarget.value);

    // Fetch when changing gender <select>
    if (e.currentTarget.id === "gender") {
      this.props.onSubmit();
    }
  }

  onSubmit = (e) => {
    this.props.onSubmit();
  }

  render () {
    const { filter } = this.props;

    return (
      <form className="people-filter" onSubmit={this.onSubmit}>
        <h6 className="title is-6">Filter by:</h6>
        <div className="select">
          <select id="gender" value={filter.gender} onChange={this.onChange}>
            <option value="">Any gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <input className="input" id="minAge" type="number" placeholder="Min age" value={filter.minAge} onChange={this.onChange} />
        <input className="input" id="maxAge" type="number" placeholder="Max age" value={filter.maxAge} onChange={this.onChange} />
        <input className="input" id="pet" type="text" placeholder="Pet" value={filter.pet} onChange={this.onChange} />
        <button className="button is-link">Filter</button>
        <hr />
      </form>
    )
  }
}

export { PeopleFilter }
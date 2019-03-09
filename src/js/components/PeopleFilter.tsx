import React from "react";
import { RouteComponentProps } from "react-router";
import cleanDeep from "clean-deep";
import queryString from "query-string";

/**
 * Renders a form with filter controls.
 */
class PeopleFilter extends React.Component<{ onSearch: any }> {
  form: React.RefObject<HTMLFormElement> = React.createRef();

  search = (e) => {
    e.preventDefault();
    const { gender, minAge, maxAge, pet } = this.form.current.elements as any;

    const query = {
      gender: gender.value || null,
      minAge: minAge.value ? parseInt(minAge.value) : null,
      maxAge: maxAge.value ? parseInt(maxAge.value) : null,
      pet: pet.value || null
    }

    this.props.onSearch(queryString.stringify(cleanDeep(query)));
  }

  render () {
    return (
      <form className="people-filter" ref={this.form} onSubmit={this.search}>
        <h6 className="title is-6">Filter by:</h6>
        <div className="select">
          <select id="gender" onChange={this.search}>
            <option value="">Any gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <input className="input" id="minAge" type="number" placeholder="Min age" />
        <input className="input" id="maxAge" type="number" placeholder="Max age" />
        <input className="input" id="pet" type="text" placeholder="Pet" />

        <button className="button is-link">Filter</button>
      </form>
    )
  }
}

export { PeopleFilter }
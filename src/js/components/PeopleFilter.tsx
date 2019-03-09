import React from "react";
import { RouteComponentProps } from "react-router";
import cleanDeep from "clean-deep";
import queryString from "query-string";

/**
 * Renders a form with filter controls.
 */
class PeopleFilter extends React.Component<RouteComponentProps> {
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

    // Query changes are received up by PeopleList in componentDidUpdate()
    this.props.history.push(`?${queryString.stringify(cleanDeep(query))}`);
  }

  render () {
    return (
      <form ref={this.form} onSubmit={this.search}>
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
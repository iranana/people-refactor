import React from "react";
import { RouteComponentProps } from "react-router";

/**
 * Renders a form with filter controls.
 */
class PeopleFilter extends React.Component<RouteComponentProps> {
  form: React.RefObject<HTMLFormElement> = React.createRef();

  search = (e) => {
    e.preventDefault();
    const { gender, minAge, maxAge } = this.form.current.elements as any;
    const query = [];

    if (gender.value) {
      query.push(`gender=${gender.value}`);
    }
    if (minAge.value) {
      query.push(`minAge=${minAge.value}`);
    }
    if (maxAge.value) {
      query.push(`maxAge=${maxAge.value}`);
    }

    // Query changes are received up by PeopleList in componentDidUpdate()
    this.props.history.push(`?${query.join('&')}`);
  }

  render () {
    return (
      <form ref={this.form} onSubmit={this.search}>
        <select id="gender" onChange={this.search}>
          <option value="">Any gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input id="minAge" type="number" placeholder="Min age" />
        <input id="maxAge" type="number" placeholder="Max age" />

        <button>Filter</button>
      </form>
    )
  }
}

export { PeopleFilter }
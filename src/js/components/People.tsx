import React from "react";
import { PeopleFilter } from "./PeopleFilter";
import { PeopleList } from "./PeopleList";

export const People = (props) => (
  <>
    <PeopleFilter { ...props } />
    <PeopleList { ...props } />
  </>
)
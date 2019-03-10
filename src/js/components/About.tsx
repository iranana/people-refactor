import React from "react";

export const About = () => (
  <div className="content"> 
    <h1 className="title is-4">About</h1>
    <p>
      This is built primarily using React, React Router and MobX. Routing is used to preserve history, derive initial filter state, 
      and fetch data when the route changes. MobX is used to manage container state, mostly because I find it to be quite succinct 
      for handling API requests with fromPromise() and observable().
    </p>
    <p>
      I'm not sure a state management library is wholly necessary here - React's own local state mechanisms would have be sufficient for 
      this implementation (albeit more boilerplatey). However, moving the state and actions (in People.tsx) to a global store would be 
      necessary if the app was to grow, in which case a library is required.
    </p>
  </div>
)
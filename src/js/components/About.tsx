import React from "react";

export const About = () => (
  <div className="content"> 
    <h1 className="title is-4">About</h1>
    <p>
      This was built primarily using React, React Router and MobX. Routing is used to capture query params and preserve history. 
      MobX was used to manage component state, mostly because I find it to be quite succinct when making API requests using fromPromise().
      I chose not to use Redux because setting up the actions, reducer and store for this seemed too much. For the same reasons, I didn't use 
      MobX to set up a store.
    </p>
    <p>
      Personally I'm not sure a state management library is wholly necessary here - React's own local state mechanisms would have be sufficient for 
      this implementation. Tracking the state of the request would require a bit more boilerplate, but that's about it.
    </p>
  </div>
)
import React from 'react';

import {
    Route, Redirect
  } from "react-router-dom";

function AuthRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }

export default AuthRoute;
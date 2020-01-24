import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const ProtectedRoute = ({ auth, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={() => auth ?
        (<Component />) :
        (
          <Redirect to="/modal_login" />
        )}
    />
  )
}
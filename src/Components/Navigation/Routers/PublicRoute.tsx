import React, {FC} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {RouteProps} from "react-router";

export const PublicRoute: FC<RouteProps> = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Redirect to={{pathname: '/home', state: {from: props.location}}}/>
        ) : (
          // @ts-ignore
          <Component {...props} />
        )
      }
    />
  )
};

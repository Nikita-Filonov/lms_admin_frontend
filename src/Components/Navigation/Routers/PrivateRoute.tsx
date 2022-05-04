import React, {FC} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {RouteProps} from "react-router";


export const PrivateRoute: FC<RouteProps> = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token');

  return (
    <React.Fragment>
      <Route
        {...rest}
        render={props =>
          token ? (
            // @ts-ignore
            <Component {...props} />
          ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
          )
        }
      />
    </React.Fragment>
  )
};

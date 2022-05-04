import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import reducer from './Redux/Reducers';
import {CoursesProvider} from "./Providers/CoursesProvider";
import SuspenseBackdrop from "./Components/Common/SuspenseBackdrop";
import {NavigationDrawer} from "./Components/Navigation/NavigationDrawer";

export const store = createStore(reducer);

const CustomRoute = () => {
  return (
    <React.Fragment>
      <SuspenseBackdrop/>
      <NavigationDrawer>
        {/*<Switch>*/}
        {/*  <CoursesRoutes/>*/}
        {/*</Switch>*/}
      </NavigationDrawer>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CoursesProvider>
          <CustomRoute/>
        </CoursesProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

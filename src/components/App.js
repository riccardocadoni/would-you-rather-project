import React, { useEffect } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { logOutUser } from "../actions/authedUser";
import { connect } from "react-redux";
//components
import Login from "./Login";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import NavBar from "./NavBar";

const App = ({ dispatch, authedUser }) => {
  return (
    <Router>
      {authedUser ? (
        <div>
          <NavBar></NavBar>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/question/:id">
            <QuestionPage></QuestionPage>
          </Route>
          <button onClick={() => dispatch(logOutUser())}>LOG OUT</button>
        </div>
      ) : (
        <Login></Login>
      )}
    </Router>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(App);

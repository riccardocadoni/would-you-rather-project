import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
//components
import Login from "./Login";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import NavBar from "./NavBar";
import LeaderBoard from "./LeaderBoard";
import NewQuest from "./NewQuest";

/**
 * @description Main component
 * @param {String} authedUser user currently signed in
 */

const App = ({ authedUser }) => {
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
          <Route exact path="/leaderboard">
            <LeaderBoard></LeaderBoard>
          </Route>
          <Route exact path="/add">
            <NewQuest></NewQuest>
          </Route>
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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//ui
import { Grid, Divider, Button } from "@material-ui/core";
//components
import Question from "./Question";

const Home = ({ dispatch, authedUser, questions, users, loading }) => {
  const [showAnsweredQueston, setShowAnsweredQueston] = useState(false);

  const getAnsweredQuestions = () => {
    return Object.keys(questions)
      .filter((quest) => Object.keys(users[authedUser].answers).includes(quest))
      .map((quest) => (
        <Grid item xs={8} align="center" key={quest}>
          <Question question={questions[quest]}></Question>
        </Grid>
      ));
  };
  const getUnansweredQuestions = () => {
    return Object.keys(questions)
      .filter(
        (quest) => !Object.keys(users[authedUser].answers).includes(quest)
      )
      .map((quest) => (
        <Grid item xs={8} align="center" key={quest}>
          <Question question={questions[quest]} preview={true}></Question>
        </Grid>
      ));
  };

  const questionsArray = showAnsweredQueston
    ? getAnsweredQuestions()
    : getUnansweredQuestions();

  return (
    <Grid container justify="center">
      <Grid item xs={10} align="center">
        <p>Hello {authedUser}!!</p>
      </Grid>
      <Grid container justify="center">
        <Button
          disabled={!showAnsweredQueston}
          onClick={() => setShowAnsweredQueston(false)}
        >
          Unanswerd
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          disabled={showAnsweredQueston}
          onClick={() => setShowAnsweredQueston(true)}
        >
          Answerd
        </Button>
      </Grid>
      <Grid container justify="center">
        {loading ? <p>loading..</p> : questionsArray}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    authedUser,
    questions,
    users,
    loading: Object.keys(questions).length === 0,
  };
};

export default connect(mapStateToProps)(Home);

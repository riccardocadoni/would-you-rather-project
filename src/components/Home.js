import React, { useState } from "react";
import { connect } from "react-redux";
//ui
import { Grid, Divider, Button } from "@material-ui/core";
//components
import Question from "./Question";

/**
 * @description Home Component, displays answered and unanswered questions
 * @param {String} authedUser user currently signed in
 * @param {Object} questions questions saved in the state
 * @param {Object} users users saved in the state
 * @param {Boolean} loading true during the api request
 */

const Home = ({ authedUser, questions, users, loading }) => {
  const [showAnsweredQueston, setShowAnsweredQueston] = useState(false);

  const getAnsweredQuestions = () => {
    return Object.keys(questions)
      .filter((quest) => Object.keys(users[authedUser].answers).includes(quest))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
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
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .map((quest) => (
        <Grid item xs={8} align="center" key={quest}>
          <Question question={questions[quest]} preview={true}></Question>
        </Grid>
      ));
  };

  let questionsArray = showAnsweredQueston
    ? getAnsweredQuestions()
    : getUnansweredQuestions();

  if (questionsArray.length === 0)
    questionsArray = [
      <Grid item xs={8} align="center" key={"all"}>
        <h2>You answered all the questions! :)</h2>
      </Grid>,
    ];

  return (
    <React.Fragment>
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
    </React.Fragment>
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

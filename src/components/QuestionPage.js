import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//ui
import { Grid } from "@material-ui/core";
//components
import Question from "./Question";

/**
 * @description Question Page Component, displays the details of the questions
 * @param {Object} questions questions saved in the state
 */

const QuestionPage = ({ questions }) => {
  const { id } = useParams();
  const question = questions[id];
  if (!question)
    return (
      <Grid container justify="center">
        <Grid item xs={10} align="center">
          <h3>404 .. this question does not exists</h3>
        </Grid>
      </Grid>
    );
  return (
    <Grid container justify="center">
      <Grid item xs={10} align="center">
        <Question question={question}></Question>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ questions }) => {
  return {
    questions,
  };
};

export default connect(mapStateToProps)(QuestionPage);

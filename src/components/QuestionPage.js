import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//ui
import { Grid, Divider, Button } from "@material-ui/core";
//components
import Question from "./Question";

const QuestionPage = ({ questions }) => {
  const { id } = useParams();
  const question = questions[id];
  if (!question) return <p>404 .. this question does not exists</p>;
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

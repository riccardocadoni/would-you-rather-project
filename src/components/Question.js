import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveNewAnswer } from "../actions/shared";
//ui
import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

/**
 * @description Home Component, displays answered and unanswered questions
 * @param {String} authedUser user currently signed in
 * @param {Object} question question passed from the parent component
 * @param {Object} users users saved in the state
 * @param {Boolean} preview true if it's displayed on the homepage, shows only a submit button
 */

const Question = ({ dispatch, question, users, authedUser, preview }) => {
  const optOneSel = question.optionOne.votes.includes(authedUser);
  const optTwoSel = question.optionTwo.votes.includes(authedUser);
  //true if the user has answered the question
  const answered = optOneSel || optTwoSel;
  let content;
  if (preview) {
    content = (
      <div>
        <p>{question.optionOne.text + "..."}</p>
        <Link to={"/question/" + question.id}>
          <Button size="large" variant="contained" color="primary">
            Submit
          </Button>
        </Link>
      </div>
    );
  } else if (answered) {
    content = (
      <>
        <div
          style={{
            flexDirection: "column",
            boxShadow: "0px 2px 1px -1px rgba(0 , 0 , 0 , 0.2)",
            margin: 10,
          }}
        >
          <p>{question.optionOne.text}</p>
          <p>{getStats(question).statOne}</p>
          {optOneSel && <StarIcon></StarIcon>}
        </div>
        <div
          style={{
            flexDirection: "column",
            boxShadow: "0px 2px 1px -1px rgba(0 , 0 , 0 , 0.2)",
            margin: 10,
          }}
        >
          <p>{question.optionTwo.text}</p>
          <p>{getStats(question).statTwo}</p>
          {optTwoSel && <StarIcon></StarIcon>}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div
          style={{
            margin: 10,
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => dispatch(saveNewAnswer(question.id, "optionOne"))}
          >
            {question.optionOne.text}
          </Button>
        </div>
        <div
          style={{
            margin: 10,
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => dispatch(saveNewAnswer(question.id, "optionTwo"))}
          >
            {question.optionTwo.text}
          </Button>
        </div>
      </>
    );
  }

  return (
    <div
      style={{
        flexDirection: "column",
        borderRadius: 10,
        boxShadow:
          "0px 2px 1px -1px rgba(0 , 0 , 0 , 0.2), 0px 1px 1px 0px rgba(0 , 0 , 0 , 0.14), 0px 1px 3px 0px rgba(0 , 0 , 0 , 0.12)",
        width: 400,
      }}
    >
      <div style={{ display: "flex", margin: 10, alignItems: "center" }}>
        <img
          src={"../" + users[question.author].avatarURL}
          alt="avatar"
          style={{ borderRadius: "50%", height: 50, weight: 50, margin: 10 }}
        ></img>
        <p>{question.author + " asks:"}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Would You Rather..</h2>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-around", padding: 30 }}
      >
        {content}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions, authedUser }) => {
  return { users, questions, authedUser };
};

export default connect(mapStateToProps)(Question);

const getStats = (question) => {
  let questOne = question.optionOne.votes.length;
  let questTwo = question.optionTwo.votes.length;
  let totalAnsw = questOne + questTwo;
  return {
    statOne: questOne + " of " + totalAnsw + " votes",
    statTwo: questTwo + " of " + totalAnsw + " votes",
  };
};

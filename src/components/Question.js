import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveNewAnswer } from "../actions/shared";
//ui
import { Button } from "@material-ui/core";

const Question = ({ dispatch, question, users, authedUser, preview }) => {
  const optOneSel = question.optionOne.votes.includes(authedUser);
  const optTwoSel = question.optionTwo.votes.includes(authedUser);
  const answered = optOneSel || optTwoSel;
  let content;
  if (preview) {
    content = (
      <div>
        <p>{question.optionOne.text + "..."}</p>
        <Link to={"/question/" + question.id}>
          <Button size="large">Submit</Button>
        </Link>
      </div>
    );
  } else if (answered) {
    content = (
      <>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <p>{question.optionOne.text}</p>
          <p>{getStats(question).statOne}</p>
          {optOneSel && <p>Your choice</p>}
        </div>
        <div style={{ flexDirection: "column" }}>
          <p>{question.optionTwo.text}</p>
          <p>{getStats(question).statTwo}</p>
          {optTwoSel && <p>Your choice</p>}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <Button
          size="small"
          onClick={() => dispatch(saveNewAnswer(question.id, "optionOne"))}
        >
          {question.optionOne.text}
        </Button>
        <Button
          size="small"
          onClick={() => dispatch(saveNewAnswer(question.id, "optionTwo"))}
        >
          {question.optionTwo.text}
        </Button>
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

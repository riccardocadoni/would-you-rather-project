import React from "react";
import { connect } from "react-redux";
//ui
import { Grid } from "@material-ui/core";

/**
 * @description LeaderBoard Component, displays the leaderboard, order by score
 * @param {Object} users users saved in the state
 */

const LeaderBoard = ({ users }) => {
  const score = Object.keys(users).map((id) => {
    return [
      id,
      users[id].questions.length + Object.keys(users[id].answers).length,
    ];
  });

  score.sort((a, b) => b[1] - a[1]);

  return (
    <Grid container justify="center">
      {score.map((user) => (
        <Card
          id={user[0]}
          score={user[1]}
          questions={users[user[0]].questions.length}
          answered={Object.keys(users[user[0]].answers).length}
          users={users}
        ></Card>
      ))}
    </Grid>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps)(LeaderBoard);

const Card = ({ id, score, questions, answered, users }) => {
  return (
    <Grid item xs={10} align="center">
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
            src={"../" + users[id].avatarURL}
            alt="avatar"
            style={{ borderRadius: "50%", height: 50, weight: 50, margin: 10 }}
          ></img>
          <p>{id}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "coloumn",
              padding: 30,
              paddingTop: 0,
            }}
          >
            <p>Answered questions: {answered}</p>
            <p>Created questions: {questions}</p>
          </div>
          <div style={{ display: "flex", padding: 30, paddingTop: 0 }}>
            <p>Score: {score}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

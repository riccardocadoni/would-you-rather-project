import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { getQuestions } from "../actions/questions";
//ui
import { Grid, Button } from "@material-ui/core";

/**
 * @description Login Component
 * @param {Object} users users saved in the state
 * @param {Boolean} loading true during the api request
 */

const Login = ({ dispatch, users, loading }) => {
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, []);

  return (
    <div className="App">
      {loading ? null : (
        <Grid container justify="center">
          <Grid item xs={8}>
            <h1>Welcome to the Would You Rather App!</h1>
            <h2>Please sign in to continue</h2>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={8}>
              <h3>Accounts:</h3>
            </Grid>
            {Object.keys(users).map((user) => {
              return (
                <Grid item xs={8} key={user}>
                  <div style={{ display: "flex", margin: 10 }}>
                    <img
                      src={"../" + users[user].avatarURL}
                      alt="avatar"
                      style={{ borderRadius: "50%", height: 50, weight: 50 }}
                    ></img>
                    <Button
                      onClick={() => dispatch(setAuthedUser(users[user].id))}
                    >
                      {users[user].id}
                    </Button>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </div>
  );
};
const mapStateToProps = ({ users, authedUser }) => {
  return { users, loading: Object.keys(users).length === 0, authedUser };
};

export default connect(mapStateToProps)(Login);

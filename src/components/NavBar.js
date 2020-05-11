import React from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../actions/authedUser";
//ui
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";

/**
 * @description NavBar Component
 * @param {String} authedUser user currently signed in
 */

const NavBar = ({ dispatch, authedUser }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={8} style={{ margin: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={{ margin: 5 }}>
                Home
              </Button>
            </Link>
            <Link to="/leaderboard" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={{ margin: 5 }}>
                Leaderboard
              </Button>
            </Link>
            <Link to="/add" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={{ margin: 5 }}>
                Add new question
              </Button>
            </Link>
          </div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              alignSelf: "right",
              marginRight: 0,
            }}
          >
            <Button
              style={{ margin: 5 }}
              variant="contained"
              onClick={() => dispatch(logOutUser())}
            >
              Log Out
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item xs={6} style={{ marginBottom: 30 }}>
        <h3>Hello {authedUser} :)</h3>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(NavBar);

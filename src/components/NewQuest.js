import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewQuestion } from "../actions/shared";
import { useHistory } from "react-router-dom";
//ui
import { Grid, Button } from "@material-ui/core";

/**
 * @description New Question Component, enables the user to create a new question
 * @param {String} authedUser user currently signed in
 */

const NewQuest = ({ dispatch, authedUser }) => {
  const history = useHistory();

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (optionOneText !== "" && optionTwoText !== "") {
      dispatch(
        addNewQuestion({ optionOneText, optionTwoText, author: authedUser })
      );
      history.push("/");
    }
  };

  return (
    <Grid container justify="center">
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
          <div
            style={{
              padding: 10,
              boxShadow:
                "0px 2px 1px -1px rgba(0 , 0 , 0 , 0.2), 0px 1px 1px 0px rgba(0 , 0 , 0 , 0.14), 0px 1px 3px 0px rgba(0 , 0 , 0 , 0.12)",
            }}
          >
            <h1>Add new question</h1>
          </div>

          <h2>Would you rather..</h2>

          <form onSubmit={handleSubmit}>
            <div style={{ flexDirection: "column" }}>
              <input
                autoFocus
                type="text"
                placeholder="First option.."
                onChange={(e) => setOptionOneText(e.target.value)}
                style={{
                  padding: 5,
                  margin: 5,
                }}
              ></input>
              <h3>OR..</h3>
              <input
                type="text"
                placeholder="Second option.."
                onChange={(e) => setOptionTwoText(e.target.value)}
                style={{
                  padding: 5,
                  margin: 5,
                }}
              ></input>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  flex: 1,
                  padding: 5,
                  margin: 10,
                  marginTop: 20,
                  width: 380,
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(NewQuest);

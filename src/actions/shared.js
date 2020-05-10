import * as DATA from "../DATA";
import { setNewAnswer } from "./questions";
import { setNewAnswerUser } from "./users";

export const saveNewAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    DATA._saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(setNewAnswer({ authedUser, qid, answer }));
      dispatch(setNewAnswerUser({ authedUser, qid, answer }));
    });
  };
};

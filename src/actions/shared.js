import * as DATA from "../DATA";
import { setNewAnswer, setNewQuestion } from "./questions";
import { setNewAnswerUser, setNewQuestionUser } from "./users";

export const saveNewAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    DATA._saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(setNewAnswer({ authedUser, qid, answer }));
      dispatch(setNewAnswerUser({ authedUser, qid, answer }));
    });
  };
};

export const addNewQuestion = (question) => {
  return (dispatch) => {
    DATA._saveQuestion(question).then((formattedQuestion) => {
      dispatch(setNewQuestion(formattedQuestion));
      dispatch(setNewQuestionUser(formattedQuestion));
    });
  };
};

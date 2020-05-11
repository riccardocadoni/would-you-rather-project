import {
  SET_QUESTIONS,
  SET_NEW_ANSWER,
  SET_NEW_QUESTION,
} from "../actions/questions";

const questions = (questions = {}, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...questions, ...action.questions };
    case SET_NEW_ANSWER:
      let { qid, answer } = action;
      let newAnswArr = questions[qid][answer].votes.concat(action.authedUser);

      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: newAnswArr,
          },
        },
      };

    case SET_NEW_QUESTION:
      return {
        ...questions,
        [action.question.id]: action.question,
      };

    default:
      return questions;
  }
};
export default questions;

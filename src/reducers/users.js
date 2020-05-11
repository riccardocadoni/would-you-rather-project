import { SET_USERS, SET_NEW_ANSWER, SET_NEW_QUESTION } from "../actions/users";

const users = (users = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...users, ...action.users };
    case SET_NEW_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case SET_NEW_QUESTION:
      const { question } = action;
      return {
        ...users,
        [question.author]: {
          ...users[question.author],
          questions: users[question.author].questions.concat([question.id]),
        },
      };

    default:
      return users;
  }
};
export default users;

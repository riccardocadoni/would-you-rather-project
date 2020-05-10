const users = (state = {}, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, ...action.users };
    case "SET_NEW_ANSWER":
      let { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
};
export default users;

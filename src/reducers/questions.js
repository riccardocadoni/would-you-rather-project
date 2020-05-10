const questions = (state = {}, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, ...action.questions };
    case "SET_NEW_ANSWER":
      let { qid, answer } = action;
      let newAnswArr = state[qid][answer].votes.concat(action.authedUser);

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: newAnswArr,
          },
        },
      };
    default:
      return state;
  }
};
export default questions;

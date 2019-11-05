const INITIAL_STATE = {
  user: null,
  repositories: [
    {
      id: 0,
      name: 'asdf',
    },
  ],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_REPOSITORIES':
      return { ...state, repositories: action.repositories };
    case 'ADD_USER_NAME':
      return { ...state, user: action.userName };
    default:
      return state;
  }
}

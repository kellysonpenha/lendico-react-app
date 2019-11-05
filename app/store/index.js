import { createStore } from 'redux';

const INITIAL_STATE = {
  user: null,
  repositories: [
    {
      id: 0,
      name: 'asdf',
    },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_REPOSITORIES') {
    return { ...state, repositories: action.repositories };
  }

  return state;
}

const store = createStore(reducer);

export default store;

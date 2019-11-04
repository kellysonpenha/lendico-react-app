import { createStore } from 'redux';

function reducer() {
  return {
    user: null,
    repositories: [],
  };
}

const store = createStore(reducer);

export default store;

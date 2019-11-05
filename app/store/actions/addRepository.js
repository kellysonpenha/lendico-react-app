export function addRepositories(repositories) {
  return {
    type: 'SET_REPOSITORIES',
    repositories,
  };
}

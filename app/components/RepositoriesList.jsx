import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../services/api';


function setRepositories(repositories) {
  return {
    type: 'SET_REPOSITORIES',
    repositories,
  };
}

class RepositoriesList extends Component {
  componentDidMount() {
    this.getRepositories();
  }

  getRepositories = async () => {
    const response = await api.get('users/kellysonpenha/repos');
    setRepositories(response.data);
  }

  render(repositories = []) {
    if (repositories.length > 0) {
      return (
        <div>
          {repositories.map((repository) => (
            <h2 key={repository.id}>{repository.name}</h2>
          ))}
        </div>
      );
    }
    return (
      <div>
        Nenhum repositório encontrado
      </div>
    );
  }
}

export default connect((state) => ({ repositories: state.repositories }))(RepositoriesList);

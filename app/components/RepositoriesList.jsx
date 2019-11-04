import React, { Component } from 'react';
import api from '../services/api';

export default class RepositoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    this.getRepositories();
  }

  getRepositories = async () => {
    const response = await api.get('users/kellysonpenha/repos');
    this.setState({
      repositories: response.data,
    });
  }

  render() {
    const { repositories } = this.state;

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

import React, { Component } from 'react';
import api from '../services/api';

export default class RepositoriesList extends Component {
  componentDidMount() {
    this.getRepositories();
  }

  getRepositories = async () => {
    const response = await api.get('users/kellysonpenha/repos');
    console.log(response.data);
  }

  render() {
    return (
      <div>
        Olá mundo
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../services/api';

import * as repositoryActions from '../store/actions/addRepository';

import { bindActionCreators } from 'redux';


class RepositoriesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.repositories.user !== null) {
      this.getRepositories();
    }
  }

  ComponentUpdate() {
    console.log('nem sei')
  }

  getRepositories = async () => {
    const response = await api.get('users/kellysonpenha/repos');
    this.props.addRepositories(response.data);
  }

  render() {
    if (this.props.repositories.length > 0) {
      return (
        <div>
          {this.props.repositories.map((repository) => (
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

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(repositoryActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);

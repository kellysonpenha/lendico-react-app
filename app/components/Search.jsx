import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as repositoryActions from '../store/actions/repository';

import {
  Input, ButtonIcon, FormGroup,
} from '../styles';
import repositories from '../store/reduces/repositories';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      user: '',
    };
  }

  inputChange = (e) => {
    this.setState({
      user: e.target.value,
      isValid: e.target.value.length >= 3,
    });
  }

  addUserName = () => {
    this.props.addUserName(this.state.user);
  }


  render() {
    console.log(this.props)
    const { isValid, user } = this.state;
    return (
      <>
        <FormGroup>
          <Input placeholder="Usuário" value={user} onChange={this.inputChange} />
          <ButtonIcon type="submit" disabled={!isValid} color="light" onClick={this.addUserName}>
            <span className="button__text">Buscar </span>
            <span className="button__icon"><i className="lni-search" /></span>
          </ButtonIcon>
        </FormGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(repositoryActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);

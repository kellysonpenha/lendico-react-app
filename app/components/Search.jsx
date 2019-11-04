import React, { Component } from 'react';

import {
  Input, ButtonIcon, FormGroup,
} from '../styles';


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

  render() {
    const { isValid, user } = this.state;
    return (
      <>
        <FormGroup>
          <Input placeholder="Usuário" value={user} onChange={this.inputChange} />
          <ButtonIcon type="submit" disabled={!isValid} color="light">
            <span className="button__text">Buscar </span>
            <span className="button__icon"><i className="lni-search" /></span>
          </ButtonIcon>
        </FormGroup>
      </>
    );
  }
}

export default Search;

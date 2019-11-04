import React from 'react';

import { Link } from 'react-router-dom';

import {
  H1, Text, Content, H2, Card,
} from '../styles';

import SearchForm from '../components/Search';
import RepositoriesList from '../components/RepositoriesList';

const Search = () => (
  <>
    <Content>
      <H1>Olá!</H1>
      <Text>
        Seja bem vindo(a)! Para começar por favor informe um usuário do GitHub
      </Text>
      <SearchForm />
      <Card>
        <H2>Repositórios</H2>
        <Text>Nenhum usuário encontrado</Text>
      </Card>
      <RepositoriesList />
      <Link to="/detail">About</Link>
    </Content>
  </>
);

export default Search;

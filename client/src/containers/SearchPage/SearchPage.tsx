import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { SearchBar } from '../../components/searchBar/SearchBar';

export const SearchPage = () => {
    return (
        <Container>
          <Jumbotron>
            <p>Logo image here</p>
            <h3>Type in a search query below!</h3>
          </Jumbotron>

          <SearchBar/>

        </Container>
      );
}
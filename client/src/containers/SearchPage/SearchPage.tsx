import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { SearchBar } from '../../components/searchBar/SearchBar';
import logo from '../../assets/300x100.png';
import './SearchPage.css';

export const SearchPage = () => {
    return (
        <Container>
          <Jumbotron>
            <img src={logo} alt="Logo"/>
            <br/>
            <h3>Type in a search query below!</h3>
          </Jumbotron>
          <SearchBar/>
        </Container>
    )
}
import React from 'react';
import { Container } from 'reactstrap';
import { NavBar } from '../../components/navBar/NavBar';
import { SearchBar } from '../../components/searchBar/SearchBar';
import logo from '../../assets/300x100.png';
import './SearchPage.css';

export const SearchPage = () => {
    return (
      <div>
        <NavBar page={"Home"}/>
        <Container className="search-page">
            <img src={logo} alt="Logo"/>
            <SearchBar/>
        </Container>
      </div>
    )
}
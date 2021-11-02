import React from 'react';
import { useSelector } from 'react-redux';
import { selectResultsData } from '../../store/ResultsData/selectors';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { Container } from 'reactstrap';
import './ResultsPage.css';

export const ResultsPage = () => {
    const resultsData = useSelector(selectResultsData);

    return (
        <Container>
            <SearchBar/>
            <p>Results Page</p>
        </Container>
      );
}
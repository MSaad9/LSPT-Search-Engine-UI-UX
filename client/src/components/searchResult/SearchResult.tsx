import React from 'react';
import { Container } from 'reactstrap';
import { ResultEntry } from '../../services/querying-api.types';
import './SearchResult.css';

interface IProps {
    result: ResultEntry;
}

export function SearchResult({result}: IProps) {
    return (
        <Container className="search-result-item">
            <p>{result.url}</p>
            <a href={result.url} target="_blank" rel="noreferrer">
                <h4>{result.title}</h4>
            </a>
            <h5>{result.snippet}</h5>
            {/* <p>{result.last_updated}</p> */}
        </Container>
    );
}
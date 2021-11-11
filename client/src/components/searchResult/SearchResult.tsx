import React from 'react';
import { ResultEntry } from '../../services/querying-api.types';
import './SearchResult.css';

interface IProps {
    result: ResultEntry;
}

export function SearchResult({result}: IProps) {
    return (
        <div>
            <p>{result.url}</p>
            <a href={result.url} target="_blank" rel="noreferrer">
                <h3>{result.title}</h3>
            </a>
            <h4>{result.snippet}</h4>
            <p>{result.last_updated}</p>
        </div>
    );
}
import React from 'react';
import { QueryResult } from '../../services/querying-api.types';

export function SearchResult(result: QueryResult) {
    return (
        <div>
            <p>{result.title}</p>
            <p>{result.summary}</p>
        </div>
    );
}
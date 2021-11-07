import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QueryResult } from '../../services/querying-api.types';
import { queryingApi } from '../../services/querying-api';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { Container } from 'reactstrap';
import { selectSearchData } from '../../store/SearchData/selectors';
import { actions as resultsDataActions } from "../../store/ResultsData/slice";
import { SearchResult } from '../../components/searchResult/SearchResult';
import './ResultsPage.css';

export const ResultsPage = () => {
    const searchData = useSelector(selectSearchData);
    let [queryResult, setQueryResult] = useState<QueryResult>({
        error: [],
        metrics: {
            compute_time: 0,
            total_results: 0
        },
        offset: 0,
        query_display: "",
        ac_suggest: [],
        qid: 0,
        results: []
    });
    let dispatch = useDispatch();

    useEffect(() => {
        const getResultsData = async () => {
            return (queryingApi.getQueryResults(searchData.searchQuery));
        }

        getResultsData().then(value => {
            console.log(value);
            setQueryResult(value);
            dispatch(resultsDataActions.setQueryResult(value.results));
            dispatch(resultsDataActions.setQueryMetrics(value.metrics));
        });
    }, [searchData.searchQuery, dispatch]);

    return (
        <Container>
            <SearchBar/>
            <p>Results Page</p>
            <p>About {queryResult.metrics.total_results} results</p>
            <p>({queryResult.metrics.compute_time} seconds)</p>

            {queryResult.results.length === 0 ? <div>No results found!</div> : <></>}
            {queryResult.results.map((res, i) => {
                return <SearchResult key={i} result={res} />
            })}
        </Container>
      );
}
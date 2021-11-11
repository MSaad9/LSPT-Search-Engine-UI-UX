import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QueryResult } from '../../services/querying-api.types';
import { queryingApi } from '../../services/querying-api';
import { NavBar } from '../../components/navBar/NavBar';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { selectSearchData } from '../../store/SearchData/selectors';
import { actions as resultsDataActions } from "../../store/ResultsData/slice";
import { actions as searchDataActions } from "../../store/SearchData/slice";
import { SearchResult } from '../../components/searchResult/SearchResult';
import './ResultsPage.css';

export const ResultsPage = () => {
    const searchData = useSelector(selectSearchData);
    let resultsPerPage = 20;
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

    const handlePageNext = () => {
        if((searchData.pageOffset+1) * resultsPerPage < queryResult.metrics.total_results)
            dispatch(searchDataActions.setPageOffset(searchData.pageOffset + 1))
    }

    const handlePagePrev = () => {
        if(searchData.pageOffset > 0)
            dispatch(searchDataActions.setPageOffset(searchData.pageOffset - 1));
    }

    const handlePageChange = (index: number) => {
        dispatch(searchDataActions.setPageOffset(index));
    }

    useEffect(() => {
        const getResultsData = async () => {
            return (queryingApi.getQueryResults(searchData.searchQuery, searchData.pageOffset));
        }

        getResultsData().then(value => {
            console.log(value);
            setQueryResult(value);
            dispatch(resultsDataActions.setQueryResult(value.results));
            dispatch(resultsDataActions.setQueryMetrics(value.metrics));
        });
    }, [searchData.searchQuery, searchData.pageOffset, dispatch]);

    let totalPages = queryResult.metrics.total_results / resultsPerPage;
    console.log("Total result pages: " + totalPages);

    return (
        <div>
            <NavBar page={"Results"}/>
            <Container>
                <SearchBar/>
                <p>About {queryResult.metrics.total_results} results</p>
                <p>({queryResult.metrics.compute_time} seconds)</p>

                {queryResult.results.length === 0 ? <div>No results found!</div> : <></>}
                {queryResult.results.map((res, i) => {
                    return <SearchResult key={i} result={res} />
                })}

                <Pagination>
                    <PaginationItem>
                        {searchData.pageOffset > 0 ? <PaginationLink previous href='#' onClick={() => handlePagePrev()}/> : <></>}
                    </PaginationItem>

                    {Array.from(Array(totalPages).keys()).map((i) => {
                        return (
                            <PaginationItem active={i === searchData.pageOffset} key={i} onClick={() => handlePageChange(i)}>
                                <PaginationLink href='#'>{i + 1}</PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    <PaginationItem>
                        {(searchData.pageOffset+1) * resultsPerPage < queryResult.metrics.total_results ? <PaginationLink next href='#' onClick={() => handlePageNext()}/> : <></>}
                    </PaginationItem>
                </Pagination>

            </Container>
        </div>
      );
}
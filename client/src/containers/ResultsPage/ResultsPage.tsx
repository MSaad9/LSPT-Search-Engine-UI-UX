import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QueryResult } from '../../services/querying-api.types';
import { queryingApi } from '../../services/querying-api';
import { NavBar } from '../../components/navBar/NavBar';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { FilterModal } from '../../components/filterModal/FilterModal'; 
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { selectSearchData } from '../../store/SearchData/selectors';
import { actions as resultsDataActions } from "../../store/ResultsData/slice";
import { actions as searchDataActions } from "../../store/SearchData/slice";
import { SearchResult } from '../../components/searchResult/SearchResult';
import './ResultsPage.css';

// Assumes the provided url contains a protocol prefix
// and a domain suffix
export function extractHostname(url: string): string {
    let { hostname } = new URL(url);
    let hostStr = hostname.toString();
    let firstP = hostStr.indexOf('.', 0);
    let lastP = hostStr.lastIndexOf('.');
    if(firstP === lastP) {
        // Only parse out .com
        return hostStr.substring(0, firstP);
    } else {
        // Parse out www. and .com
        return hostStr.substring(firstP + 1, lastP);
    }
}

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
                <span className="results-metrics">
                    <p className="query-metrics">About {queryResult.metrics.total_results} results ({queryResult.metrics.compute_time} seconds)</p>
                    <FilterModal/>
                </span>
                <p>Showing results for <b>{searchData.searchQuery}</b></p>

                {queryResult.results.length === 0 ? <div>No results found!</div> : <></>}
                {queryResult.results.map((res, i) => {
                    let hostname = extractHostname(res.url);
                    console.log(hostname);
                    if(searchData.siteFilters.includes(hostname))
                        return <SearchResult key={i} result={res} />
                    else
                        return <></>
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
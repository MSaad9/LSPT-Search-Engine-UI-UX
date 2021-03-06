import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actions as searchActions } from '../../store/SearchData/slice';
import { Row, Col, Form, FormGroup, Input, Button} from 'reactstrap';
import { selectSearchData } from '../../store/SearchData/selectors';
import './SearchBar.css';

export function SearchBar() {
    let [searchText, setSearchText] = useState<string>("");
    let existingSearch = useSelector(selectSearchData);
    let dispatch = useDispatch();
    let history = useHistory();


    // Handle search query submission using Querying component API
    const handleSearchSubmit = (e: React.FormEvent, query: string) => {
        e.preventDefault();
        
        // If the search query changed, reset the page offset
        if(existingSearch.searchQuery !== query)
            dispatch(searchActions.setPageOffset(0));
        dispatch(searchActions.setSearchQuery(query));
        let queryString: string = encodeURI(query);
        history.push('/search?q=' + queryString);

        console.log("Searching results for: " + query);
    }

    const handleQueryChange = (event: any) => {
        setSearchText(event.target.value);
    }

    // If previous search already exists, display it in the search bar
    useEffect(() => {
        if(existingSearch.searchQuery !== "")
            setSearchText(existingSearch.searchQuery);
    }, [existingSearch.searchQuery]);

    return (
        <Form onSubmit={(e) => handleSearchSubmit(e, searchText)}>
            <Row className="search-bar-row">
                <Col className="search-bar-col" md={10}>
                    <FormGroup>
                        <Input type="text" name="search" id="searchBar" value={searchText} onChange={event => handleQueryChange(event)} />
                    </FormGroup>
                </Col>
                <Col className="search-bar-col" md={2}>
                    <Button type="submit">Submit</Button>                   
                </Col>
            </Row>
        </Form>
    );
}
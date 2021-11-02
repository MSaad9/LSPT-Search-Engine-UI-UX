import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actions as searchActions } from '../../store/SearchData/slice';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './SearchBar.css';
import { selectSearchData } from '../../store/SearchData/selectors';

export function SearchBar() {
    const [searchText, setSearchText] = useState<string>("");
    const existingSearch = useSelector(selectSearchData);
    const dispatch = useDispatch();
    const history = useHistory();

    // Handle search query submission using Querying component API
    // Perform error checking before sending query
    const handleSearchSubmit = (query: string) => {
        dispatch(searchActions.setSearchQuery(query));
        let queryString: string = encodeURI(query);
        history.push('/search?q=' + queryString);
        console.log(query);
    }

    const handleQueryChange = (event: any) => {
        setSearchText(event.target.value);
    }

    // If previous search alreaady exists, display it in the search bar
    useEffect(() => {
        if(existingSearch.searchQuery !== "")
            setSearchText(existingSearch.searchQuery);
    }, [existingSearch]);

    return (
        <Form onSubmit={() => handleSearchSubmit(searchText)}>
            <FormGroup>
                <Input type="text" name="search" id="searchBar" value={searchText} onChange={event => handleQueryChange(event)} />
            </FormGroup>
            <Button type="submit">Submit</Button>
      </Form>
    );
}
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './SearchBar.css';

export function SearchBar() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const history = useHistory();

    // Handle search query submission using Querying component API
    // Perform error checking before sending query
    const handleSearchSubmit = (query: string) => {
        let queryString: string = encodeURI(query);
        history.push('/search?q=' + queryString);
        console.log(query);
    }

    const handleQueryChange = (event: any) => {
        setSearchQuery(event.target.value);
    }

    return (
        <Form>
            <FormGroup>
                <Input type="text" name="search" id="searchBar" value={searchQuery} onChange={event => handleQueryChange(event)} />
            </FormGroup>
            <Button type="button" onClick={() => handleSearchSubmit(searchQuery)}>Submit</Button>
      </Form>
    );
}
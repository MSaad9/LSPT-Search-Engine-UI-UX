import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './SearchBar.css';

export function SearchBar() {
    return (
        <Form>
            <FormGroup>
                <Input type="text" name="search" id="searchBar" />
            </FormGroup>
            <Button>Submit</Button>
      </Form>
    );
}
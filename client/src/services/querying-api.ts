import axios from 'axios';
import { QueryResult } from './querying-api.types';

export class QueryingApiService {
    //should we be passed the url as well?
    //where should we get user id's?
    public async getQueryResults(query: string, url: string) {
        
        //url, user id, query string, query id
        
        var postParamters = {
            'uid':'',
            'q': query,
            'qid':'',
            'url': url
        };

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            
        };

        fetch(postParamters['url'], requestOptions)
            .then(response => response.json())

        
        return;
    }
}

export const queryingApi = new QueryingApiService();

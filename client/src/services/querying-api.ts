import axios from 'axios';
import { QueryResult } from './querying-api.types';

export class QueryingApiService {
    //where should we get user id's?
    public async getQueryResults(query: string) {
        
        var getParamters = {
            'q':query,
            'q_site': '',
            'q_lang':'en',
            'q_exclude': '',
            'q_include':'',
            'q_id':'',
            'offset':'',
            'page_size':'',
            'uid':'',
            'accept':'application/json',
            'accept_language':'en',
            'user_agent':''
        };

        //What are the X-RateLimit headers for?
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-RateLimit-Limit': 0,
                'X-RateLimit-Remaining': 0,
                'X-RateLimit-Reset': 0,
                'Content-Language': getParamters['q_lang'],
                'Content-Type': getParamters['accept']
            },
            
        };

        //how should we fetch? /search is the extension of what url?
        //fetch()

        
        return;
    }
}

export const queryingApi = new QueryingApiService();

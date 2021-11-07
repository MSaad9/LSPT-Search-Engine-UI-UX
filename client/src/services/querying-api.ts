import axios from 'axios';
import { QueryResult } from './querying-api.types';

export class QueryingApiService {
    // This base address will change depending on how the querying team
    // sets up their API
    private queryingAddress = "http://localhost/";

    public async getQueryResults(query: string) {
        let url = this.queryingAddress + "search"

        let config = {
            params: {
                q: query, 
                offset: 0, 
                page_size: 20
            },
            headers: {
              "Accept": "application/json",
              "User-Agent": "lsptteamnuiux"
            }
          }


        let res = await axios.get<QueryResult>(url, config);
        let queryResponse: QueryResult = {
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
        };

        queryResponse = res.data;
        return queryResponse;
    }
}

export const queryingApi = new QueryingApiService();

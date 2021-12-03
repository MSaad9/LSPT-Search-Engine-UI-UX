import axios from 'axios';
import { QueryResult, ResultEntry } from './querying-api.types';

export class QueryingApiService {
    // This base address will change depending on how the querying team
    // sets up their API
    private queryingAddress = "http://localhost/";

    // Commented out for now until querying API is complete
    // public async getQueryResults(query: string, page_offset: number) {
    //     let url = this.queryingAddress + "search"

    //     let config = {
    //         params: {
    //             q: query, 
    //             offset: page_offset, 
    //             page_size: 20
    //         },
    //         headers: {
    //           "Accept": "application/json",
    //           "User-Agent": "lsptteamnuiux"
    //         }
    //       }


    //     let res = await axios.get<QueryResult>(url, config);
    //     let queryResponse: QueryResult = {
    //         error: [],
    //         metrics: {
    //             compute_time: 0,
    //             total_results: 0
    //         },
    //         offset: 0,
    //         query_display: "",
    //         ac_suggest: [],
    //         qid: 0,
    //         results: []  
    //     };

    //     queryResponse = res.data;
    //     return queryResponse;
    // }

    // Function which returns mock query results for a search
    public async getQueryResults(query: string, page_offset: number) {
        let mockResults: ResultEntry[] = [];
        const numResults: number = 40;
        let rndTxt: string[] = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
            "Excepteur sint occaecat cupidatat non proident.", 
            "Sunt in culpa qui officia deserunt mollit anim id est laborum."
        ];

        let rndSites: string[] = [
            "https://www.amazon.com/", 
            "https://github.com/",
             "https://www.reddit.com/", 
             "https://www.wikipedia.org/"
        ];

        // Assuming 20 results to display per page
        for(let i = 0; i < 20; i++) {
            mockResults.push({
                url: rndSites[Math.floor(Math.random() * rndSites.length)],
                title: "Search Result " + (i + 1 + (page_offset*20)).toString(),
                snippet: rndTxt[Math.floor(Math.random() * rndTxt.length)],
                last_updated: new Date().toString()
            });
        }
        let queryResponse: QueryResult = {
            error: [],
            metrics: {
                compute_time: 100,
                total_results: numResults
            },
            offset: page_offset,
            query_display: "",
            ac_suggest: [],
            qid: 0,
            results: mockResults
        };

        return queryResponse;
    }
}

export const queryingApi = new QueryingApiService();

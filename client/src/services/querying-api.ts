import axios from 'axios';
import { QueryResult } from './querying-api.types';

export class QueryingApiService {
    // This base address will change depending on how the querying team
    // sets up their API
    private queryingAddress = "http://localhost/";

    // public async getQueryResults(query: string) {
    //     let url = this.queryingAddress + "search"

    //     let config = {
    //         params: {
    //             q: query, 
    //             offset: 0, 
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

    public async getQueryResults(query: string) {
        let queryResponse: QueryResult = {
            error: [],
            metrics: {
                compute_time: 1000,
                total_results: 5
            },
            offset: 0,
            query_display: "",
            ac_suggest: [],
            qid: 0,
            results: [
                {
                    url: "#",
                    title: "Search Result 1",
                    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    last_updated: new Date().toString()
                },
                {
                    url: "#",
                    title: "Search Result 2",
                    snippet: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                    last_updated: new Date().toString()
                },
                {
                    url: "#",
                    title: "Search Result 3",
                    snippet: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    last_updated: new Date().toString()
                },
                {
                    url: "#",
                    title: "Search Result 4",
                    snippet: "Excepteur sint occaecat cupidatat non proident.",
                    last_updated: new Date().toString()
                },
                {
                    url: "#",
                    title: "Search Result 5",
                    snippet: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    last_updated: new Date().toString()
                }
            ]  
        };

        return queryResponse;
    }
}

export const queryingApi = new QueryingApiService();

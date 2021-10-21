// Based on return format of Querying API response
export interface QueryResult {
    title: string;
    url: string;
    summary: string;
}

export interface QueryResponse {
    data: Array<QueryResult>;
}
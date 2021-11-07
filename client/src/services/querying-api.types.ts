// Based on return format of Querying API response
export interface QueryResult {
    error: string[];
    metrics: ResultMetrics;
    offset: number;
    query_display: string;
    ac_suggest: string[];
    qid: number;
    results: ResultEntry[];
}

export interface ResultEntry {
    url: string;
    title: string;
    snippet: string;
    last_updated: Date;
}

export interface ResultMetrics {
    compute_time: number;
    total_results: number;
}
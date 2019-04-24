export class ApiPagination <T> {
    public current_page: number;
    public first_page_url: string;
    public from: string;
    public last_page: number;
    public last_page_url: string;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: string;
    public total: number;
    public data: [T];
}

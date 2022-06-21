export interface UserResult{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}
export interface User{
    id: number;
    name: string;
    description: string;
    year: number;
}
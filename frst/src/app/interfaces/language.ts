export interface LanguageResult {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Language[];
}
export interface Language {
    id: number;
    name: string;
    description: string;
    year: number;
}

//export all the functions from the user.ts file
module.exports = {LanguageResult, Language};
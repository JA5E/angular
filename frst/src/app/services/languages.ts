import{Injectable}from'@angular/core';
import{HttpClient}from'@angular/common/http';
import{LanguageResult}from'../interfaces/language.ts';

@Injectable({
    providedIn: 'root'
})
export class LanguagesService {
    constructor(private http: HttpClient) {
        this.getLanguages().subscribe((result.LanguageResult) => {
            console.log(resut.data);
     }
    getLanguages(){
        return this.http.get<LanguageResult>('https://reqres.in/api/languages?page=1');
    }
}
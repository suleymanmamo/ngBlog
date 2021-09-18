import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Article } from "../article";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.apiUrl + "/dashboard/overview");
  }

  togglePublishState(article: Article): Observable<Article> {
    return this.http.post<Article>(
      environment.apiUrl + "/dashboard/article/publish",
      article
    );
  }

  getArticle(key: string): Observable<Article> {
    return this.http.get<Article>(
      environment.apiUrl + "/dashboard/article/" + key
    );
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(
      environment.apiUrl + "/dashboard/article",
      article
    );
  }

  deleteArticles(id: number): Observable<any> {
    return this.http.delete<any>(
      environment.apiUrl + "/dashboard/article/" + id
    );
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(
      environment.apiUrl + "/dashboard/article",
      article
    );
  }
}

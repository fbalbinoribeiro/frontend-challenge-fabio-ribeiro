/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CaseUtil } from 'src/app/utils/case-util';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root',
})
export class GenericApiService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loadingService: LoadingService
  ) {}

  get<T>(url: string): Observable<T> {
    this.loadingService.loading$.next(true);
    const data: Observable<T> = this.httpClient
      .get<T>(url, {
        headers: this.getDefaultHeaders(),
      })
      .pipe(map((x) => CaseUtil.keysToCamel(x)));
    this.loadingService.loading$.next(false);
    return data;
  }

  post<T>(url: string, body: any): Observable<T> {
    this.loadingService.loading$.next(true);
    const data: Observable<T> = this.httpClient
      .post<T>(url, body, {
        headers: this.getDefaultHeaders(),
      })
      .pipe(map((x) => CaseUtil.keysToCamel(x)));
    this.loadingService.loading$.next(false);
    return data;
  }

  private getDefaultHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${environment.holidaysApi.key}`,
    });
    return headers;
  }
}

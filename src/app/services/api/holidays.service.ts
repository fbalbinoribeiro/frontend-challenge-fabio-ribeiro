/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountriesDto } from 'src/app/dtos/countries-dto';
import { CountryYearDto } from 'src/app/dtos/country-year-dto';
import { Country } from 'src/app/models/country';
import { Holiday } from 'src/app/models/holiday';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loadingService: LoadingService
  ) {}

  async getCountries(): Promise<Country[]> {
    this.loadingService.loading$.next(true);
    const countriesDto: CountriesDto = await this.httpClient
      .get<CountriesDto>(`${environment.holidaysApi.url}/countries`, {
        headers: this.getDefaultHeaders(),
      })
      .toPromise<CountriesDto>();
    this.loadingService.loading$.next(false);
    return countriesDto.countries;
  }

  async getHolidaysByCountryAndYear(
    countryYearDto: CountryYearDto
  ): Promise<Holiday[]> {
    this.loadingService.loading$.next(true);
    const holidays = await this.httpClient
      .post<Holiday[]>(`${environment.holidaysApi.url}/list`, countryYearDto, {
        headers: this.getDefaultHeaders(),
      })
      .toPromise();
    this.loadingService.loading$.next(false);
    return holidays;
  }

  getDefaultHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${environment.holidaysApi.key}`,
    });
    return headers;
  }
}

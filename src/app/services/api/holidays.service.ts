/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesDto } from 'src/app/dtos/countries-dto';
import { CountryYearDto } from 'src/app/dtos/country-year-dto';
import { HolidaysDto } from 'src/app/dtos/holidays-dto';
import { CountryMapper } from 'src/app/mappers/country-mapper';
import { HolidayMapper } from 'src/app/mappers/holiday-mapper';
import { Country } from 'src/app/models/country';
import { Holiday } from 'src/app/models/holiday';
import { environment } from 'src/environments/environment';
import { GenericApiService } from './generic-api.service';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  constructor(private readonly genericApiService: GenericApiService) {}

  getCountries(): Observable<Country[]> {
    const countriesDto: Observable<Country[]> = this.genericApiService
      .get<CountriesDto>(`${environment.holidaysApi.url}/countries`)
      .pipe(map(CountryMapper.toCountriesList));
    return countriesDto;
  }

  getHolidaysByCountryAndYear(
    countryYearDto: CountryYearDto
  ): Observable<Holiday[]> {
    const holidaysDto: Observable<Holiday[]> = this.genericApiService
      .post<HolidaysDto>(`${environment.holidaysApi.url}/list`, countryYearDto)
      .pipe(map(HolidayMapper.toHolidaysList));
    return holidaysDto;
  }
}

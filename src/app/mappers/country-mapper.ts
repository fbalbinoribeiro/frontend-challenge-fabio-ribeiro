/* eslint-disable @typescript-eslint/naming-convention */
import { CountriesDto } from '../dtos/countries-dto';
import { CountryYearDto } from '../dtos/country-year-dto';
import { Country } from '../models/country';

export class CountryMapper {
  static toCountryYearDto(country_code: string, year: number): CountryYearDto {
    return {
      country_code,
      year,
    } as CountryYearDto;
  }

  static toCountriesList(countriesDto: CountriesDto): Country[] {
    return countriesDto.countries as Country[];
  }
}

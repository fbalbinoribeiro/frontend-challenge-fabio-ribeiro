/* eslint-disable @typescript-eslint/naming-convention */
import { CountryYearDto } from '../dtos/country-year-dto';

export class CountryMapper {
  static toCountryYearDto(country_code: string, year: number): CountryYearDto {
    return {
      country_code,
      year,
    } as CountryYearDto;
  }
}

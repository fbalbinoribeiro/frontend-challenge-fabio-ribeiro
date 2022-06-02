import { HolidaysDto } from '../dtos/holidays-dto';
import { Holiday } from '../models/holiday';

export class HolidayMapper {
  static toHolidaysList(holidaysDto: HolidaysDto): Holiday[] {
    return holidaysDto.holidays as Holiday[];
  }
}

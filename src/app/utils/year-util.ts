export class YearUtil {
  static getYear(): number {
    return new Date().getFullYear();
  }

  static getLastActualAndNextYear(): number[] {
    const currentYear = YearUtil.getYear();
    return [currentYear - 1, currentYear, currentYear + 1];
  }
}

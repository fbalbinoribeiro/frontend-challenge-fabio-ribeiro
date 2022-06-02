import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';
import { HolidaysService } from 'src/app/services/api/holidays.service';
import { YearUtil } from 'src/app/utils/year-util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries$: Observable<Country[]>;
  selectedYear: number;
  years: number[];

  constructor(
    private readonly holidaysService: HolidaysService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.countries$ = await this.getCountries();
    this.years = YearUtil.getLastActualAndNextYear();
    this.selectedYear = YearUtil.getYear();
  }

  getCountries(): Observable<Country[]> {
    return this.holidaysService.getCountries();
  }

  async getDetails(country: Country): Promise<void> {
    this.router.navigate(['/detail', country.code, this.selectedYear]);
  }

  getColor(year) {
    return year === this.selectedYear ? 'secondary' : 'dark';
  }

  setYear(year) {
    this.selectedYear = year;
  }
}

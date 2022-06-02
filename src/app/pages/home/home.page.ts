import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { HolidaysService } from 'src/app/services/api/holidays.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries: Country[];

  constructor(
    private readonly holidaysService: HolidaysService,
    private readonly router: Router
  ) {}

  async refresh(ev): Promise<void> {
    await this.getCountries();
    ev.detail.complete();
  }

  async ngOnInit(): Promise<void> {
    this.countries = await this.getCountries();
  }

  async getCountries(): Promise<Country[]> {
    return await this.holidaysService.getCountries();
  }

  async getDetails(country: Country): Promise<void> {
    console.log(country.code);
    this.router.navigate(['/detail', country.code, 2022]);
  }
}

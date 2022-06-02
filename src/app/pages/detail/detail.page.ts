import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryYearDto } from 'src/app/dtos/country-year-dto';
import { CountryMapper } from 'src/app/mappers/country-mapper';
import { Holiday } from 'src/app/models/holiday';
import { HolidaysService } from 'src/app/services/api/holidays.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  paramsSub$: Subscription;
  countryYear: CountryYearDto;
  holiday: Holiday;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly holidaysService: HolidaysService
  ) {
    this.paramsSub$ = this.activatedRoute.paramMap.subscribe(async (params) => {
      this.countryYear = CountryMapper.toCountryYearDto(
        params.get('code'),
        +params.get('year')
      );
      this.holiday = await this.holidaysService.getHolidaysByCountryAndYear(
        this.countryYear
      );
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.paramsSub$.unsubscribe();
  }
}

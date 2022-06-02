import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadingSub$: Subscription;
  loading: HTMLIonLoadingElement;

  constructor(
    private readonly loadingController: LoadingController,
    private readonly loadingService: LoadingService
  ) {}

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create();
    this.loadingSub$ = this.loadingService.loading$.subscribe(
      async (loading) => {
        if (loading) {
          await this.loading.present();
        } else {
          await this.loading.dismiss();
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loadingSub$) {
      this.loadingSub$.unsubscribe();
    }
  }
}

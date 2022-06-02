import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ToolbarModule],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}

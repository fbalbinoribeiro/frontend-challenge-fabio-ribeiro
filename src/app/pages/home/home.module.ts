import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { MessageComponentModule } from 'src/app/message/message.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    ToolbarModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

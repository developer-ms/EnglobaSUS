import { ChartComponent } from './chart/chart.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InputComponent } from './input/input.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [InputComponent, SideMenuComponent, ChartComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputComponent, SideMenuComponent, ChartComponent]
})
export class ComponentsModule {}

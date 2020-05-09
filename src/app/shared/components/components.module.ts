import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputComponent]
})
export class ComponentsModule {}

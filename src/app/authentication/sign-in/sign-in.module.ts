import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { ComponentsModule } from './../../shared/components/components.module';

import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SignInPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}

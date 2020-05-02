import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
>>>>>>> 2affe21... Added contact form
=======
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
>>>>>>> eeba46817070a529adc9aeb99420498e30cba0a8


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    ReactiveFormsModule,
    MaterialModule,
>>>>>>> 2affe21... Added contact form
=======
    ReactiveFormsModule,
    MaterialModule,
>>>>>>> eeba46817070a529adc9aeb99420498e30cba0a8
    ContactRoutingModule
  ]
})
export class ContactModule { }

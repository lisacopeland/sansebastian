import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
>>>>>>> 2affe21... Added contact form


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
=======
    ReactiveFormsModule,
    MaterialModule,
>>>>>>> 2affe21... Added contact form
    ContactRoutingModule
  ]
})
export class ContactModule { }

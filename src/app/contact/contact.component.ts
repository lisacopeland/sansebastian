import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> 2affe21... Added contact form
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> eeba46817070a529adc9aeb99420498e30cba0a8

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  constructor() { }
=======
  contactForm: FormGroup;

  constructor(private snackBar: MatSnackBar) { }
>>>>>>> 2affe21... Added contact form
=======
  contactForm: FormGroup;

  constructor(private snackBar: MatSnackBar) { }
>>>>>>> eeba46817070a529adc9aeb99420498e30cba0a8

  ngOnInit(): void {
    this.initForm();
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> eeba46817070a529adc9aeb99420498e30cba0a8
  initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.snackBar.open('Please fill in required fields', '', {
        duration: 2000,
      });
      return;
    }
    console.log('Form' + this.contactForm.value);
  }

>>>>>>> 2affe21... Added contact form
}

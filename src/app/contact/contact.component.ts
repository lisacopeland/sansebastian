import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

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

}

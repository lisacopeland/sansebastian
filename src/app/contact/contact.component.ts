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
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log('formgroup: ' + this.contactForm);
    if (!this.contactForm.valid) {
      this.snackBar.open('Please fill in required fields', '', {
        duration: 2000
      });
    }
  }

}

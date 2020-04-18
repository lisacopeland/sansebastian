import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
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
    console.log('Form' + this.contactForm.value);
  }

}

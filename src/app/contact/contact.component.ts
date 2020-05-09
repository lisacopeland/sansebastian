import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactFormService, ContactInterface } from './conact-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              private contactFormService: ContactFormService) { }

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

    const contactInfo: ContactInterface = {
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    this.contactFormService.createPost(contactInfo)
      .subscribe(data => {
        console.log(data);
        this.snackBar.open('Message sent successfully! Thank you for contacting us.', '', {
          duration: 2000
        });
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
        this.snackBar.open('Error sending message! Please try again later.', '', {
          duration: 2000
        });
      });
  }

}

import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';

export interface ContactInterface {
  email: string;
  phone: string;
  subject: string;
  message: string;
  sentAt: firebase.firestore.Timestamp;
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private firestore: AngularFirestore) { }

  createPost(contact: ContactInterface) {
    return from(this.firestore.collection('contacts').add(contact));
  }

  createEmail(mail: any) {
    return from(this.firestore.collection('mail').add(mail));
  }
}

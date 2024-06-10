import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {"id": 1, "name": "Ana", "phone": "29 278869420", "email": "email@gmail.com"}
  ]

  constructor() {
    //const contacstLocalStorageString = localStorage.getItem('contacts')
    //const contactsLocalStorage = contacstLocalStorageString ? JSON.parse(contacstLocalStorageString) : null

   // this.contacts = contactsLocalStorage || null

    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  getContacts() {
    return this.contacts;
  }

  saveContact(contact: Contact) {
    this.contacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }
}

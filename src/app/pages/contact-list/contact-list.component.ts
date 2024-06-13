import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule,
    FormContactComponent,
    RouterLink
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent implements OnInit{
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = [];

  filterByText: string = ''

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts()
  }

  private removeAccents(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036F]/g, '')
  }

  filterContactsByText(): Contact[] {
    if(!this.filterByText) {
      return this.contacts
    }
    return this.contacts.filter(contact => {
      return this.removeAccents(contact.name).toLowerCase().includes(this.removeAccents(this.filterByText).toLowerCase())
    })
  }

  filterContactsByInitialLeter(letter: string) : Contact[] {
    return this.filterContactsByText().filter(contact => {
      return this.removeAccents(contact.name).toLocaleLowerCase().startsWith(this.removeAccents(letter).toLowerCase())
    })
  }
}

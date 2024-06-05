import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';

interface Contact {
  id: number
  name: string
  phone: string
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda;

  filterByText: string = ''

  private removeAccents(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036F]/g, '')
  }

  filterContactsByText (): Contact[] {
    if(!this.filterByText) {
      return this.contacts
    }
    return this.contacts.filter( contact => {
      return this.removeAccents(contact.name)
      .toLowerCase()
      .includes(this.removeAccents(this.filterByText)
      .toLowerCase())
    })
  }

  filterContactsByInitialLeter(letter: string) : Contact[] {
    return this.filterContactsByText().filter( contact => {
      return this.removeAccents(contact.name).toLocaleLowerCase().startsWith(this.removeAccents(letter).toLowerCase())
    })
  }
}

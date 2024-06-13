import { Routes } from '@angular/router';
import { FormContactComponent } from './pages/form-contact/form-contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: 'form',
    component: FormContactComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: '',
    redirectTo: '/contact-list',
    pathMatch: 'full'
  }
];

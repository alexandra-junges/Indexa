import { ContactService } from './../../services/contact.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparatorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent implements OnInit{

  contactForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    this.startForm()
  }

  startForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl(''),
      media: new FormControl(''),
      comments: new FormControl('')
    })
  }

  saveContact() {
    const newContact = this.contactForm.value
    this.contactService.saveContact(newContact)
    this.contactForm.reset()
    this.router.navigateByUrl('/contact-list')
  }

  cancel() {
    this.contactForm.reset()
  }
}

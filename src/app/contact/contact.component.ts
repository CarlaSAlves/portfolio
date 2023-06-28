import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contactDetails: any = {
    location: 'Fundão',
    email: 'carla.s@gmail.com',
    phone: '910 11 99 66'
  }

  public formSubmitted = false;
  public contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  onReset() {
    this.contactForm.reset();
    this.formSubmitted = false;
  }

  errorlValidator(controlName: string, errorName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control && control.errors &&
      control.errors[errorName] &&
      this.formSubmitted &&
      control.value !== '';
  }
}

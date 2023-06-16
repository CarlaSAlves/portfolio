import { Component, OnInit, createPlatform } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactDetails: any = {
    location: 'Fundão',
    email: 'carla.soeiro@gmail.com',
    phone: '910 44 99 66'
  }

  public contactForm = new FormGroup({
    name: new FormControl(''),
    emali: new FormControl(''),
    message: new FormControl('')
  })


  constructor () { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

}

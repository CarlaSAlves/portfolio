import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public yourName: string | undefined
  public profileImage!: string;

  constructor () { }

  ngOnInit(): void {
    this.profileImage = 'assets/images/foto_profile2.jpg' // replace with the path of your image

  }

}

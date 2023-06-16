import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name!: string;
  public profession!: string;
  public profileImage!: string;
  public yourName!: string;

  constructor () { }

  ngOnInit(): void {

    this.profileImage = 'assets/images/foto_profile.jpg' // replace with the path of your image
    this.profession = "Softwere Developer"
    this.name = 'Carla Alves'
    this.yourName = 'Carla Alves'
  }

}

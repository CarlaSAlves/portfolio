import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public yourName: string | undefined

  constructor () { }

  ngOnInit(): void {
    this.yourName = 'Carla Alves'
  }

}

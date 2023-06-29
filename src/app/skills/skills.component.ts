import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skillsBar = [
    { name: 'Angular', level: 60 },
    { name: 'TypeScript', level: 50 },
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 75 },
    // add more skills here
  ];

  public skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];

  constructor () { }

  ngOnInit(): void {
  }

}

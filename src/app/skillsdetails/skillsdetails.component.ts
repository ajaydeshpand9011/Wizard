import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillsdetails',
  templateUrl: './skillsdetails.component.html',
  styleUrls: ['./skillsdetails.component.css']
})
export class SkillsdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNext(){
    this.router.navigate(['experience']);
  }

  onBack(){
    this.router.navigate(['contact']);
  }

}

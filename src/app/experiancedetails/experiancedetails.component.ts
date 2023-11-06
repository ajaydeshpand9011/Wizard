import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiancedetails',
  templateUrl: './experiancedetails.component.html',
  styleUrls: ['./experiancedetails.component.css']
})
export class ExperiancedetailsComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  onNext(){
    this.router.navigate(['finish']);
  }

  onBack(){
    this.router.navigate(['skills']);
  }

}

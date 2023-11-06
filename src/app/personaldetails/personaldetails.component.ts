import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNext(){
    this.router.navigate(['contact']);
  }

}

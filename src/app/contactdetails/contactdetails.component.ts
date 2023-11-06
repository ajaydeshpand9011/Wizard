import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNext(){
    this.router.navigate(['skills']);
  }

  onBack(){
    this.router.navigate(['personal']);
  }

}

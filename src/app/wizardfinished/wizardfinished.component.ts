import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizardfinished',
  templateUrl: './wizardfinished.component.html',
  styleUrls: ['./wizardfinished.component.css']
})
export class WizardfinishedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFinish(){
    this.router.navigate(['personal']);
  }

}

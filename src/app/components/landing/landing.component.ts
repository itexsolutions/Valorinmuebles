import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  url = 'http://localhost:5000/landing';

  constructor() { }

  ngOnInit() {
  }

  loaded() {
    console.log('loaded');
  }

}

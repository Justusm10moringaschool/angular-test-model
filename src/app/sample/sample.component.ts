import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  name : any;
  constructor() { }

  ngOnInit(): void {
  this.name = "This is a new app for angular"
  }

}

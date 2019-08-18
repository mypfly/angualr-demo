import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.css']
})
export class HappyComponent implements OnInit {

  @Input() hero;

  constructor() { }

  ngOnInit() {
  }

}

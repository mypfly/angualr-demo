import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {

  @Input() hero;

  constructor() { }

  ngOnInit() {
  }

}

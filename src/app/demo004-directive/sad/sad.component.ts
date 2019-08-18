import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.css']
})
export class SadComponent implements OnInit {

  @Input() hero;

  constructor() { }

  ngOnInit() {
  }

}

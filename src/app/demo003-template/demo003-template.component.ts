import {Component, OnInit, ViewChild} from '@angular/core';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-demo003-template',
  templateUrl: './demo003-template.component.html',
  styleUrls: ['./demo003-template.component.css']
})
export class Demo003TemplateComponent implements OnInit {


  @ViewChild(HeroDetailComponent, {static: true}) heroDetailComponent: HeroDetailComponent;
  myHero = '兰陵王';
  img = './assets/img/lanlingwang.jpg';
  img2 = './assets/img/lanlingwang2.jpg';
  isDisplay = true;
  twoWayBinding = '欢迎召唤师';

  constructor() {
  }

  ngOnInit() {
  }

  getVal() {
    return 3;
  }

  hiddenImg() {
    this.isDisplay = !this.isDisplay;
  }

  getModifyHero(hero) {
    this.myHero = hero;
  }
}

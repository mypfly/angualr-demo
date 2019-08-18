import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo004-directive',
  templateUrl: './demo004-directive.component.html',
  styleUrls: ['./demo004-directive.component.css']
})
export class Demo004DirectiveComponent implements OnInit {

  color = 'red';
  hero = {
    name: 'lanling king'
  };
  heroes = [
    {
      name: '兰陵王',
      emotion: 'happy'
    },
    {
      name: '荆轲',
      emotion: 'sad'
    },
    {
      name: '李白',
      emotion: 'unknown'
    },
  ];
  currentHero = {
    name: '兰陵王',
    emotion: 'happy'
  };

  isSpecial = true;

  constructor() {
  }

  ngOnInit() {
  }

  selectHero(selectHero) {
    this.currentHero = this.heroes.filter(h => h.name === selectHero.name)[0];
    console.log('this.currentHero => ', this.currentHero);
  }

  changeColor() {
    this.isSpecial = !this.isSpecial;
  }

}

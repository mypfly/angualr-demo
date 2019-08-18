import {Component, OnInit} from '@angular/core';
import {DemoServiceService} from './demo-service.service';

@Component({
  selector: 'app-demo006-service',
  templateUrl: './demo006-service.component.html',
  styleUrls: ['./demo006-service.component.css']
})
export class Demo006ServiceComponent implements OnInit {

  heroes = [];
  asyncHeroes = [];

  constructor(private demoService: DemoServiceService) {
  }

  ngOnInit() {
    /*示例1*/
    this.heroes = this.demoService.getHeroes();

    /*示例2*/
    /*    this.demoService.getHeroesObservable().subscribe(heroes => {
          this.asyncHeroes = heroes;
        });*/

    /*示例3*/
    this.demoService.getHeroesObservableMock().subscribe(heroes => {
      this.asyncHeroes = heroes;
    });
  }

}

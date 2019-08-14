import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero;
  @Output() modifyHero: EventEmitter<any> = new EventEmitter(true);

  tip = '父亲告诉儿子：';

  constructor() {

  }

  ngOnInit() {
  }

  outPutToParent() {
    this.modifyHero.emit('荆轲');
    this.tip = '儿子告诉父亲:';
  }

  getLiBai() {
    return '最厉害的刺客是 李白';
  }

  getHanxin() {
    return '最厉害的刺客是 韩信';
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-demo007-route',
  templateUrl: './demo007-route.component.html',
  styleUrls: ['./demo007-route.component.css']
})
export class Demo007RouteComponent implements OnInit {

  routerParameter;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(param => {
      this.routerParameter = param.get('name');
      console.log('this.routerParameter => ', this.routerParameter)
    });
  }

  back() {
    this.router.navigateByUrl('/demo001');
  }

}


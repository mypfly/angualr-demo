import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-demo005-pipe',
  templateUrl: './demo005-pipe.component.html',
  styleUrls: ['./demo005-pipe.component.css']
})
export class Demo005PipeComponent implements OnInit {


  birthday = new Date(1997, 3, 15);
  sex = 'man';

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  formatDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}

/*每个应用开始的时候差不多都是一些简单任务：获取数据、转换它们，然后把它们显示给用户，在很多不同的应用中，都在重复做出某些相同的变换*/

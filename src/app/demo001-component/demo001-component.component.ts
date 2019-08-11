import {Component, OnInit} from '@angular/core';


/** @Component 组件装饰器，标识 Demo001ComponentComponent 为angular能识别的组件 ,里面的元素表示组件的元数据
 * selector 组件标签名 告诉别的组件如何引用我 app-demo001-component
 * templateUrl 组件模板，可以理解为加强版的html，angular提供了自己一些模板语法、内置指令、管道等，极大的扩展了html的能力
 * styleUrls  组件的样式 渲染组件 styles为内敛联样式，这两个允许同时设置，styleUrls会覆盖styles,强烈建议只使用styleUrls
 */
@Component({
  selector: 'app-demo001-component', // 命名规范建议以 - 分隔
  templateUrl: './demo001-component.component.html', // template为内敛模板
  styleUrls: ['./demo001-component.component.css']
})
export class Demo001ComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

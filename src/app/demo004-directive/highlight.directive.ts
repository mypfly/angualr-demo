import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]' // @Directive 装饰器的配置属性中指定了该指令的 CSS 属性型选择器 [appHighlight]
})
export class HighlightDirective {

  /** 示例3：给指令传值  @Input 装饰器。它往类上添加了一些元数据，从而让该指令的 highlightColor 能用于绑定。
   * 它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular 就会拒绝绑定
   */
  @Input('appHighlight') highlightColor: string;


  /**
   * 示例2：@HostListener 装饰器让你订阅某个属性型指令所在的宿主 DOM 元素的事件，在这个例子中就是 <p>元素
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }


  constructor(private el: ElementRef) {
    /** 示例1：你可以在指令的构造函数中使用 ElementRef 来注入宿主 DOM 元素的引用，也就是你放置 appHighlight 的那个元素。
     * ElementRef 通过其 nativeElement 属性给你了直接访问宿主 DOM 元素的能力。
     * 这里的第一个实现把宿主元素的背景色设置为了黄色
     */
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

/**
 * 总结：Angular 在宿主元素 <p> 上发现了一个 appHighlight 属性。
 * 然后它创建了一个 HighlightDirective 类的实例，并把所在元素的引用注入到了指令的构造函数中。
 * 在构造函数中，该指令把 <p> 元素的背景设置为了黄色。
 */

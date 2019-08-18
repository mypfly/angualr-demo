import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStruct]'
})
export class StructDirective {

  hasView = false;

  @Input() set appStruct(condition) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    /*使用TemplateRef取得 <ng-template> 的内容，并通过ViewContainerRef来访问这个视图容器。*/
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

}

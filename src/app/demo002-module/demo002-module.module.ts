import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoModuleBasicComponent} from './demo-module-basic/demo-module-basic.component';


/** @NgModule 模块装饰器，标识 Demo002ModuleModule 为angular能识别的特性模块,里面的元素表示模块的元数据
 * 元数据
 *  declarations 用于声明属于此模块的视图类（组件、指令、管道），使得模块内的组件可以互相引用，模块内可见。可以类比Java中访问控制friendly
 *  imports 引入模块，该模块依赖的其他模块或者路由模块，引入后才能使用其他模块的组件、指令和管道。可以类比Java中的jar包理解
 *  exports  导出视图类， 当该模块被引入到其他外部模块时候，声明可以被外部模块访问的组件（指令、管道）。可以类比private、public理解
 *  providers 指定模块依赖的服务，引入后该模块中的所有组件都可以使用这些服务
 *  entryComponents: 数组类型的选项,指定一系列的组件,这些组件将会在这个模块定义的时候进行编译,
 *                   Angular会为每一个组件创建一个ComponentFactory然后把它存储在ComponentFactoryResolver
 */

@NgModule({
  declarations: [DemoModuleBasicComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoModuleBasicComponent],
  providers: [],
  entryComponents: [],

})
export class Demo002ModuleModule {


}

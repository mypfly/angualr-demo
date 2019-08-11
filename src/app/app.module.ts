import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Demo001ComponentComponent} from './demo001-component/demo001-component.component';
import {Demo002ModuleModule} from './demo002-module/demo002-module.module';
import { Demo003TemplateComponent } from './demo003-template/demo003-template.component';

/** 特殊的特性模块（根模块）AppModule
 * bootstrap 指定了这个模块启动的时候应该启动的组件.这些组件会被自动的加入到entryComponents
 * 与普通特性模块的差别：
 *  1. bootstrap: [AppComponent] 元数据 指定应用的根组件，你所能开到的localhost:4200所打开的页面是由根组件AppComponent渲染
 *  2. 一般无 exports 元数据，根模块中一般只有应用的总入口 AppComponent 组件, 其他模块不会引用AppModule,也不会引用AppComponent,因为没那么玩的
 */

@NgModule({
  declarations: [
    AppComponent,
    Demo001ComponentComponent,
    Demo003TemplateComponent
  ],
  imports: [
    BrowserModule, // 提供了启动和运行应用的基础设施
    AppRoutingModule,
    Demo002ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


/**  AppModule 是根模块，跟模块是启动应用的入口 */
export class AppModule {
}

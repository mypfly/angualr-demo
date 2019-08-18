import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Demo001ComponentComponent} from './demo001-component/demo001-component.component';
import {Demo002ModuleModule} from './demo002-module/demo002-module.module';
import {Demo003TemplateComponent} from './demo003-template/demo003-template.component';
import {HeroDetailComponent} from './demo003-template/hero-detail/hero-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Demo004DirectiveComponent} from './demo004-directive/demo004-directive.component';
import {Demo005PipeComponent} from './demo005-pipe/demo005-pipe.component';
import {Demo006ServiceComponent} from './demo006-service/demo006-service.component';
import {Demo007RouteComponent} from './demo007-route/demo007-route.component';
import {Demo008PaletxComponent} from './demo008-paletx/demo008-paletx.component';
import {Demo009HerosComponent} from './demo009-heros/demo009-heros.component';
import {Demo010TaskComponent} from './demo010-task/demo010-task.component';
import {HighlightDirective} from './demo004-directive/highlight.directive';
import {StructDirective} from './demo004-directive/struct.directive';
import {HappyComponent} from './demo004-directive/happy/happy.component';
import {SadComponent} from './demo004-directive/sad/sad.component';
import {UnknownComponent} from './demo004-directive/unknown/unknown.component';
import {DatePipe} from '@angular/common';
import {PipeDemoPipe} from './demo005-pipe/pipe-demo.pipe';
import {HttpClientModule} from '@angular/common/http';

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
    Demo003TemplateComponent,
    HeroDetailComponent,
    Demo004DirectiveComponent,
    Demo005PipeComponent,
    Demo006ServiceComponent,
    Demo007RouteComponent,
    Demo008PaletxComponent,
    Demo009HerosComponent,
    Demo010TaskComponent,
    HighlightDirective,
    StructDirective,
    HappyComponent,
    SadComponent,
    UnknownComponent,
    PipeDemoPipe
  ],
  imports: [
    BrowserModule, // 提供了启动和运行应用的基础设施
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Demo002ModuleModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})


/**  AppModule 是根模块，跟模块是启动应用的入口 */
export class AppModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Demo001ComponentComponent} from './demo001-component/demo001-component.component';
import {Demo007RouteComponent} from './demo007-route/demo007-route.component';
import {Demo003TemplateComponent} from './demo003-template/demo003-template.component';
import {Demo004DirectiveComponent} from './demo004-directive/demo004-directive.component';


const routes: Routes = [
  {
    path: '',
    component: Demo007RouteComponent
  },
  {
    path: 'demo001',
    component: Demo001ComponentComponent
  },
  {
    path: 'demo002',
    loadChildren: './demo002-module/demo002-module.module#Demo002ModuleModule'
  },
  {
    path: 'demo003',
    component: Demo003TemplateComponent
  },
  {
    path: 'demo004',
    component: Demo004DirectiveComponent
  },
  {
    path: 'demo007',
    component: Demo007RouteComponent
  },
  {
    path: 'demo007/:name',
    component: Demo007RouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

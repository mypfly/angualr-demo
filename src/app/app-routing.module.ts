import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Demo001ComponentComponent} from './demo001-component/demo001-component.component';


const routes: Routes = [
  {
    path: 'demo001',
    component: Demo001ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

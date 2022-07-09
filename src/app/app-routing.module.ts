import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageWrapperComponent } from './components/main-page-wrapper/main-page-wrapper.component';

const routes: Routes = [
  { path: "", component: MainPageWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

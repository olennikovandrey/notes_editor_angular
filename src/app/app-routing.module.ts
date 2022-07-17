import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageWrapperComponent } from './components/main-page-wrapper/main-page-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "main",
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    component: MainPageWrapperComponent
  },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

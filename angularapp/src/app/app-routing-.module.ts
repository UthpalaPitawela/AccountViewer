import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUploadComponent } from './account/account-upload/account-upload.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { LoginComponent } from './login/login.component';
import { authorizationGuard } from './authorization.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
  {
    path: 'account-upload', component: AccountUploadComponent, canActivate: [authorizationGuard],
    data: {
      role: 'admin'
    } },
  {
    path: 'account-view', component: AccountViewComponent, canActivate: [authorizationGuard],
    data: {
      role: 'user'
    } },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

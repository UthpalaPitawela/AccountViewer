import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUploadComponent } from './account/account-upload/account-upload.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'account-upload', component: AccountUploadComponent },
    { path: 'account-view', component: AccountViewComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

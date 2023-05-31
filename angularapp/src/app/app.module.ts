import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { AccountUploadComponent } from './account/account-upload/account-upload.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing-.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { AuthorizationGuardService, authorizationGuard } from './authorization.guard';


@NgModule({
  declarations: [
    AppComponent,
    AccountViewComponent,
    AccountUploadComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
      NgbModule,
      AppRoutingModule
    //RouterModule.forRoot([
    //  { path: 'account-upload', component: AccountUploadComponent },
    //  { path: 'account-view', component: AccountViewComponent },
    //]),
  ],
  providers: [
    AuthService,
    AuthorizationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

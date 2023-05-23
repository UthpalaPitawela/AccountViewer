import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  

import { AppComponent } from './app.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountUploadComponent } from './account/account-upload/account-upload.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AccountViewComponent,
    AccountUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'account-upload', component: AccountUploadComponent },
      { path: 'account-view', component: AccountViewComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

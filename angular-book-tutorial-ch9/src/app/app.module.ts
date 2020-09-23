import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component';
import {GitHubComponent} from './github.component';
import {routing} from './app.routing';
import {GitHubUserComponent} from './githubuser.component';
import {AuthGuard} from './auth-guard.service';
import {LoginService} from './login.service';
import {LoginComponent} from './login.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GitHubComponent, GitHubUserComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, routing
  ],
  providers: [AuthGuard, LoginService, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

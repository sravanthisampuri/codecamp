import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule, Router} from "@angular/router";
import {NgForm} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component'
import { AuthGaurd } from './app.authgaurd';

const router : Routes = [
  { path : '' , component : RegistrationComponent },
   { path : 'register' , component : RegistrationComponent },
   { path : 'login' , component : LoginComponent},
   { path : 'profile' , component : ProfileComponent},
   { path : 'movies',component: MoviesComponent},
   { path : 'movies/:id', component : MoviedetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactFormComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    MoviesComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
      ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }

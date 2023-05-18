import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    NavbarComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],// Add AppRoutingModule to the imports array
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

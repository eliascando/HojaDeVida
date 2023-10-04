import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutLayout } from './layout/about/about.layout';
import { ProjectsLayout } from './layout/projects/projects.layout';
import { PillComponent } from './components/pill.component';
import { ExperienceLayout } from './layout/experience/experience.layout';
import { CommonModule } from '@angular/common';
import { NavLayout } from './layout/nav/nav.layout';


@NgModule({
  declarations: [
    AppComponent,
    PillComponent,
    AboutLayout,
    ProjectsLayout,
    ExperienceLayout,
    NavLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    PillComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PillModule { }

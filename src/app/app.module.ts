import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageWrapperComponent } from './components/main-page-wrapper/main-page-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteFormComponent } from './components/note-form/note-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageWrapperComponent,
    HeaderComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { MainPageWrapperComponent } from './components/main-page-wrapper/main-page-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { HighlightSearchPipe } from './pipes/highlighted.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageWrapperComponent,
    HeaderComponent,
    NoteFormComponent,
    NoteItemComponent,
    HighlightSearchPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

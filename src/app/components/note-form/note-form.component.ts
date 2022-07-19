import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { NotesData } from '../../models/notes-data.model';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass']
})

export class NoteFormComponent implements OnInit {
  public title: string = "";
  public content: string = "";
  public searchValue: string = "";
  public notes: NotesData[] = [];

  constructor(private notesService: NotesService) {}

  addNote(): void {
    this.notesService.addNote(this.title, this.content);
  };

  private getNotes(): void {
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes)
  };

  public removeNote() {
    this.getNotes();
  };

  ngOnInit(): void {
    this.getNotes();
  };
};

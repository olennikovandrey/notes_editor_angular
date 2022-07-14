import { Component, OnInit } from '@angular/core';
import { NotesData } from "../../models/notes-data.model";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass']
})

export class NoteFormComponent implements OnInit {
  title: string = "";
  content: string = "";
  searchValue: string = "";
  notes: NotesData[] = [];

  ngOnInit(): void {
    localStorage.getItem("Notes") ?
      this.notes = JSON.parse(localStorage.getItem("Notes") || "[]") :
      this.notes = [];
  };

  addNote(title: string, content: string): void {
    if(this.notes.find(item => item.title === title)) {
      return
    };

    const tags: RegExpMatchArray | null = content.match(/\B(#[a-zA-ZА-Яа-я0-9Ёёй]+)(\s|$)/ig);
    const newNote = new NotesData(title, content, tags);
    this.notes.push(newNote);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
  };

  removeNote(title: string): void {
    localStorage.setItem("Notes", JSON.stringify(this.notes.filter(item => item.title !== title)));
    this.notes = this.notes.filter(item => item.title !== title);
  };

  removeTag(tagInfo: { title: string, content: string, tags: string[] }): void {
    const currentNoteIndex = this.notes.findIndex(item => item.title === tagInfo.title);
    const newNote = new NotesData(tagInfo.title, tagInfo.content, tagInfo.tags);

    this.notes.splice(currentNoteIndex, 1, newNote);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
  };

  editNote(editedNote: NotesData) {
    const currentNoteIndex = this.notes.findIndex(item => item.title === editedNote.title);
    this.notes.splice(currentNoteIndex, 1, editedNote);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
  };
};

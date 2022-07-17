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
      alert("This title is already taken. Try another one");
      return
    };

    if(title.trim().length === 0 || content.trim().length === 0) {
      alert("You should not add an empty note. Fill all fields");
      return
    };
    const tags: RegExpMatchArray | null = content.match(/\B(#[a-zA-ZА-Яа-я0-9Ёёй]+)(\s|$)/ig);
    const newNote = new NotesData(title, content, tags);
    this.notes.push(newNote);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
    document.querySelectorAll("input").forEach(item => item.value = "");
    document.querySelector("textarea")!.value = "";
  };

  removeNote(title: string): void {
    localStorage.setItem("Notes", JSON.stringify(this.notes.filter(item => item.title !== title)));
    this.notes = this.notes.filter(item => item.title !== title);
  };

  newNoteReplacer(editedNote: NotesData): void {
    const currentNoteIndex = this.notes.findIndex(item => item.title === editedNote.title);
    this.notes.splice(currentNoteIndex, 1, editedNote);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
  };
};

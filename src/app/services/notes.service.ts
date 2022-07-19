import { Injectable } from '@angular/core';
import { NotesData } from '../models/notes-data.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: NotesData[] = JSON.parse(localStorage.getItem("Notes") || "[]");

  public addNote(title: string, content: string): void {
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

  public getNotes(): Observable<NotesData[]> {
    return of(this.notes);
  };

  public removeNote(title: string): void {
    this.notes = this.notes.filter(item => item.title !== title);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
  };

  public newNoteReplacer(editedNote: NotesData): void {
    const currentNoteIndex = this.notes.findIndex(item => item.title === editedNote.title);
    this.notes.splice(currentNoteIndex, 1, editedNote);
    localStorage.setItem("Notes", JSON.stringify(this.notes));
  };
};

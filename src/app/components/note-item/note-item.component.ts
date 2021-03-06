import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesData } from '../../models/notes-data.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.sass']
})

export class NoteItemComponent {
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() tags: RegExpMatchArray | null = [];
  @Input() index: number = 0;
  @Output() removeNoteEvent = new EventEmitter();

  constructor(private notesService: NotesService) {}

  removeNote() {
    this.notesService.removeNote(this.title);
    this.removeNoteEvent.emit();
  };

  removeTag(i: number): void {
    const newContent = this.content.replace(this.tags![i], this.tags![i].slice(1));
    this.tags?.splice(i, 1);
    const editedNote: NotesData = new NotesData(this.title, newContent, this.tags);

    this.notesService.newNoteReplacer(editedNote);
  };

  saveEditedNote(): void {
    const newContent: string = document.querySelectorAll(".note-content")[this.index].textContent!;
    const tags: RegExpMatchArray | null = newContent!.match(/\B(#[a-zA-ZА-Яа-я0-9Ёёй]+)(\s|$)/ig);
    const editedNote: NotesData = new NotesData(this.title, newContent, tags);
    this.notesService.newNoteReplacer(editedNote);
  };
};

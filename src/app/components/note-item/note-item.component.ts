import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesData } from '../../models/notes-data.model';

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
  @Output() removeTagEvent = new EventEmitter();
  @Output() editNoteEvent = new EventEmitter();

  removeNote() {
    this.removeNoteEvent.emit(this.title);
  };

  removeTag(i: number) {
    this.tags?.splice(i, 1)
    const tagRemoveHelper = {
      title: this.title,
      content: this.content,
      tags: this.tags
    };

    this.removeTagEvent.emit(tagRemoveHelper);
  };

  editNote() {
    const newContent: string = document.querySelectorAll(".note-content")[this.index].textContent!;
    const tags: RegExpMatchArray | null = newContent!.match(/\B(#[a-zA-ZА-Яа-я0-9Ёёй]+)(\s|$)/ig);
    const editedNote: NotesData = new NotesData(this.title, newContent, tags);

    this.editNoteEvent.emit(editedNote);
  };
};

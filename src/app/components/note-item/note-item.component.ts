import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.sass']
})

export class NoteItemComponent {
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() tags: RegExpMatchArray | null = [];
  @Output() removeNoteEvent = new EventEmitter();
  @Output() removeTagEvent = new EventEmitter();

  removeNote() {
    this.removeNoteEvent.emit(this.title);
  };

  removeTag(event: Event) {
    const tagRemoveHelper = {
      title: this.title,
      content: this.content,
      deletedTag: (event.target as HTMLSpanElement).getAttribute("data-name")
    }
    this.removeTagEvent.emit(tagRemoveHelper);
  };
};

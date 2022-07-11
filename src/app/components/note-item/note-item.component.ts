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
  @Output() removeEvent = new EventEmitter();

  removeNote() {
    this.removeEvent.emit(this.title);
  }
}

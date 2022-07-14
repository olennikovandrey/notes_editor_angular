import { Pipe, PipeTransform } from "@angular/core";
import { NotesData } from '../models/notes-data.model';

@Pipe({
  name: "filter"
})

export class FilterPipe implements PipeTransform {
  transform(notes: NotesData[], searchValue: string): NotesData[] {
    return notes.filter((item: NotesData) =>
      item.content.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
};

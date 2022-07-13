import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlight"
})

export class HighlightSearchPipe implements PipeTransform {
  transform(content: string, searchValue: string): string {
    if (!searchValue) {
      return content;
    };

    const re = new RegExp(searchValue, 'gi');
    return content.replace(re, "<mark>" + searchValue + "</mark>");
  };
};

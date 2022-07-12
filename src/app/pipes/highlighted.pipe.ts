import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlight"
})

export class HighlightSearch implements PipeTransform {
  transform(value: string, args: string): string {
    if (!args) {return value;}
    const re = new RegExp(args, 'gi');
    return value.replace(re, "<mark>" + args + "</mark>");
  };
};

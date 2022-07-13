export class NotesData {
  title: string;
  content: string;
  hashTags: RegExpMatchArray | null

  constructor(title: string, content: string, hashTags: RegExpMatchArray | null) {
    this.title = title;
    this.content = content;
    this.hashTags = hashTags;
  };
};

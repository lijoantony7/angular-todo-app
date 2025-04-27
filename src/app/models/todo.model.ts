export class Todo {
  constructor(
    public id: number,
    public name: string,
    public done: boolean = false,
    public createdTime: string,
  ) { }
  toggle() {
    this.done = !this.done;
  }
}

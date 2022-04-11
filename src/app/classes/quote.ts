export class Quote {
  public showDetails: boolean;
  public showLikes: number;
  public showDislikes: number;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public description: string,
    public creationDate: Date
  ) {
    this.showDetails = false;
    this.showLikes = 0;
    this.showDislikes = 0;
  }
}

export class Quote {
  public showDetails: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public creationDate: Date
  ) {
    this.showDetails = false;
  }
}

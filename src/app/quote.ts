export class Quote {
  
  showDetails: boolean;
  constructor(public id:number, public name: string,public author: string ,public submitter: string ,public upvote:number ,public downvote:number, public submitdate:Date){
    this.showDetails=false;
  }

}

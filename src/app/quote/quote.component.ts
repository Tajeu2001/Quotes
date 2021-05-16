import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'True confidence leaves no room for jealousy.','Nicki Minaj','Lukas William',0,0,new Date(2020,1,9)),
    new Quote(2,'Never regret anything that made you smile.','Angela Akoth','Gladwell Gee',0,0,new Date(2019,4,6)),
    new Quote(3,'Yesterday you said tomorrow. Just do it.','Ali Salim', 'Mary Magda',0,0,new Date(2020,5,7)),
  ];

  quoteDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  completeQuote(isComplete:any, index:number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id= quoteLength+1;
    quote.submitdate = new Date(quote.submitdate)
    this.quotes.push(quote)
  }/*

  constructor() { }

  ngOnInit(): void {
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todaydate:any =new Date( today.getMonth(),today.getDate() ,today.getFullYear());
    var dateDifference = Math.abs(value - todaydate);
    var secondsInDay=86400;
    var secondsInHours=3600;
    var secondsInWeeks = 604800; 
    var dateDifferenceSeconds=dateDifference * 0.001;
    var hoursPassed = Math.floor(dateDifferenceSeconds/secondsInHours);
    var daysPassed = Math .floor(dateDifferenceSeconds/secondsInDay);
    var weeksPassed = Math.floor(dateDifferenceSeconds/secondsInWeeks);

    if(daysPassed >= 1 && value > todaydate){
      return daysPassed ;
    }
     else {return 0}
    
  }

}

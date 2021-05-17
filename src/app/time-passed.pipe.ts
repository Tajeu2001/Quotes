import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let todaydate:any =new Date( today.getMonth(),today.getDate() ,today.getFullYear());
    var dateDifference = Math.abs(value - todaydate);
    var secondsInDay=86400;
    var dateDifferenceSeconds=dateDifference * 0.001;
    var hoursPassed = Math.floor(dateDifferenceSeconds/3600);
    var daysPassed = Math.floor(dateDifferenceSeconds/secondsInDay);
    var weeksPassed = dateDifferenceSeconds/604800;

    if(dateDifferenceSeconds<=3600){
      return hoursPassed;
    }
    if(dateDifferenceSeconds<=86400){
      return daysPassed;
    }
    if(dateDifferenceSeconds<=604800){
      return weeksPassed;
    }else{return 0;}
  }

}

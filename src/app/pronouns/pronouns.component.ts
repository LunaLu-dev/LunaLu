import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pronouns',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pronouns.component.html',
  styleUrl: './pronouns.component.css'
})
export class PronounsComponent {

  time: string = "";
  age: string = "";

  UpdateTime(){
    //Update Clock
    const date = new Date();
    this.time = date.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: "Europe/Stockholm"});

    //Update Age
    const born = new Date("2004-04-24T02:31:00");

    //Split Up date
    let year: number = date.getFullYear() - born.getFullYear();
    let month: number = date.getMonth() - born.getMonth();
    let day: number = date.getDate() - born.getDate();
    let hour: number = date.getHours() - born.getHours();
    let minute: number = date.getMinutes() - born.getMinutes();
    let second: number = date.getSeconds() - born.getSeconds();

    if(second < 0){
      second += 60;
      minute--;
    }
    if(minute < 0){
      minute += 60;
      hour--;
    }
    if(hour < 0){
      hour += 24;
      day--;
    }
    if(day < 0){
      let prevMonth = new Date(date.getFullYear(), date.getMonth(), 0,).getDate();
      day += prevMonth;
      month --;
    }
    if(month < 0){
      month += 12;
      year--;
    }

    this.age = `${year} years, ${month} months, ${day} days, ${hour} hours, ${minute} minutes and , ${second} seconds`;
  }

  ngOnInit() {
    this.UpdateTime();
    setInterval(() => {
      this.UpdateTime()
    },1000)
  }

  protected readonly window = window;
}

import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  startingMinutes: number = 10;
  time: number = 10;
  countdown: string = '00:30';
  interval:any; 
  constructor() { }

  ngOnInit(): void {
   this.updateCountdown();
  }
  updateCountdown() {
    if (this.time == -1) {
      clearInterval(this.interval)
      alert('SE ACABÓ EL TIEMPO PERREEE')
      this.countdown = '00:00'
      return; 
    }
    console.log(this.time);
    //const minutes = Math.floor(this.time / 60);
    let seconds = this.time % 60;
    this.countdown = '00:' + (seconds < 10 ? '0' + seconds : seconds);
    this.time--;
    console.log(this.countdown);
    console.log(this.time);
  }
  ngAfterViewInit() {
    this.interval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
}

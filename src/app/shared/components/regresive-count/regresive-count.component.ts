import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-regresive-count',
  standalone: true,
  imports: [],
  templateUrl: './regresive-count.component.html',
  styleUrl: './regresive-count.component.scss'
})
export class RegresiveCountComponent implements AfterViewInit {
  @Input() title:string = ""
  @Input({ required: true }) targetDate!: Date;
  date: any
  now : any
  difference: any

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  ngAfterViewInit(): void {
    setInterval(() => {
      this.tickTock();
      this.difference = (this.targetDate.getTime() - this.now) / (1000 * 60 * 60 * 24);
      this.days.nativeElement.innerText = Math.floor(this.difference)
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}

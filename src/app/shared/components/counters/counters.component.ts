import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  @Input({ required: true }) counters!: { "start": number, "end": number, "name": string }[]
  //@ViewChild("number") number1

  animateValue(start: number, end: number, duration: number) {
    let startTimestamp: number|null= null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      //obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);

    }

    const obj = document.getElementById("value");
    //this.animateValue(obj, 100, 0, 5000);

  }
}

import { AfterViewInit, Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent implements AfterViewInit {
  private time = 3000
  @Input({ required: true }) counters!: { "start": number, "end": number, "name": string, "desc": string }[]
  @ViewChildren("counterElement") counterElements!: QueryList<ElementRef>

  constructor(private render: Renderer2) { }

  ngAfterViewInit(): void {
    let animated = new Array(this.counters.length).fill(false)
    this.render.listen('window', 'scroll', () => {
      this.counterElements.forEach((e: ElementRef, i: number) => {
        let position = e.nativeElement.getBoundingClientRect()
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          if(!animated[i]){
            this.animateValue(e.nativeElement, this.counters[i].start, this.counters[i].end, this.time);
            animated[i] = true
          }
        }
      })
    })
  }

  animateValue(obj: any, start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }
}

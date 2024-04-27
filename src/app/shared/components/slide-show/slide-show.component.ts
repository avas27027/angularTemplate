import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/** 
 * **slidesArr** - *[id:number, url: string]*
 * 
 * **aniVelocity** - *number*
 * 
 * **styleWidth** - *string*
 * 
 * **height** - *string*
 * 
 * legend - *boolean*;
 * 
 * buttons - *boolean*;
 * 
 * spaceB - *number*;
 * 
 * interval - *number*
 * 
 * behavour - *"linear" | "ease"*
 * 
 * mediumMediaHeight - *string*
 * 
 * smallMediaHeight - *string*
*/
@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.scss'
})
export class SlideShowComponent implements OnInit {
  constructor(private renderer: Renderer2) { }

  private _curr = 0;
  private _last = 0;
  direction: "forward" | "reverse" = "forward"
  active = true

  @Input() legend = true
  @Input() buttons = true
  @Input() spaceB = 0
  @Input({ required: true }) slidesArr!: { "id": number, "url": string }[]
  @Input() interval?: number
  @Input({ required: true }) aniVelocity!: number
  @Input() behavour?: "linear" | "ease";
  @Input({ required: true }) styleWidth!: string
  @Input({ required: true }) height!: string
  @Input() mediumMediaHeight?: string
  @Input() smallMediaHeight?: string

  @ViewChild("legend") legendRef!: ElementRef
  @ViewChildren("legendDot") legendDotRef!: QueryList<ElementRef>
  @ViewChild("buttons") buttonsRef!: ElementRef
  @ViewChild("slide1") slideRef1!: ElementRef
  @ViewChild("slide2") slideRef2!: ElementRef

  public get last() {
    return this._last;
  }
  public set last(value) {
    this._last = value;
  }
  public get curr() {
    return this._curr;
  }
  public set curr(value) {
    this.active = !this.active
    console.log(this.active)
    this.renderer.setAttribute(this.slideRef1.nativeElement, "data-active", String(this.active))
    this.renderer.setAttribute(this.slideRef2.nativeElement, "data-active", String(!this.active))
    if (value === this.slidesArr.length) this._curr = 0;
    else if (value === -1) this._curr = this.slidesArr.length - 1;
    else this._curr = value;
    this.legendDotRef.toArray().forEach((e, i) => {
      if (i === this.curr) {
        this.renderer.setAttribute(e.nativeElement, "data-active", "true")
      }
      else {
        this.renderer.setAttribute(e.nativeElement, "data-active", "false")
      }
    });
  }

  ngOnInit(): void {
    if (!this.legend) {
      this.renderer.setAttribute(this.legendRef.nativeElement, "data-active", "false")
    }
    if (!this.buttons) {
      this.renderer.setAttribute(this.buttonsRef.nativeElement, "data-active", "false")
    }
    if (this.interval != undefined) {
      setInterval(() => {
        this.last = this.curr;
        this.curr = this.curr + 1;
        this.direction = 'forward';
      }, this.interval);
    }
  }

  legendHandler(index: number) {
    if (index >= this.curr) {
      this.last = this.curr
      this.curr = index
      this.direction = 'forward'
    } else {
      this.last = this.curr
      this.curr = index
      this.direction = 'reverse'
    }
  }

  onClickR() {
    this.last = this.curr;
    this.curr = this.curr + 1;
    this.direction = 'forward';
  }
  onClickL() {
    this.last = this.curr;
    this.curr = this.curr - 1;
    this.direction = 'reverse';
  }
}

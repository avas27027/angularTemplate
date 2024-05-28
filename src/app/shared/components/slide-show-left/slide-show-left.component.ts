import { CommonModule } from '@angular/common';
import { Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-slide-show-left',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './slide-show-left.component.html',
  styleUrl: './slide-show-left.component.scss'
})
export class SlideShowLeftComponent {
  constructor(private renderer: Renderer2) { }

  private _curr = 0;
  private _last = 0;
  direction: "forward" | "reverse" = "forward"
  active = true

  @Input() legend = true
  @Input() buttons = true
  @Input() spaceB = 0
  @Input() interval?: number
  @Input({ required: true }) aniVelocity!: number
  @Input() behavour?: "linear" | "ease";
  @Input({ required: true }) styleWidth!: string
  @Input({ required: true }) height!: string
  @Input() mediumMediaHeight?: string
  @Input() smallMediaHeight?: string

  @ContentChildren("template") itemsTemplate!: QueryList<TemplateRef<any>>

  @ViewChild("legend") legendRef!: ElementRef
  @ViewChildren("legendDot") legendDotRef!: QueryList<ElementRef>
  @ViewChildren("buttons") buttonsRef!: QueryList<ElementRef>
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
    this.renderer.setAttribute(this.slideRef1.nativeElement, "data-active", String(this.active))
    this.renderer.setAttribute(this.slideRef2.nativeElement, "data-active", String(!this.active))
    if (value === this.itemsTemplate.length) this._curr = 0;
    else if (value === -1) this._curr = this.itemsTemplate.length - 1;
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

  ngAfterViewInit(): void {
    if (!this.legend) {
      this.renderer.setAttribute(this.legendRef.nativeElement, "data-active", "false")
    }
    if (!this.buttons) {
      this.buttonsRef.forEach((item:ElementRef)=>{this.renderer.setAttribute(item.nativeElement, "data-active", "false")})
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

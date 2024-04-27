import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from '../generic-card/generic-card.component';
import { MatIconModule } from '@angular/material/icon';

/**
 * **arr** - *{ "id": number, "img": string, "title": string, "desc": string, "button": string }[]*
 * 
 * **columns** - *number*
 */
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, GenericCardComponent, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input({ required: true }) arr!: { "id": number, "img": string, "title": string, "desc": string, "button": string }[]
  @Input({ required: true }) columns!: number
  @ViewChild("box") box!: ElementRef
  @ViewChild("slide") slide!: ElementRef
  @ViewChild("leftBut") leftBut!: ElementRef
  @ViewChild("rightBut") rightBut!: ElementRef

  constructor(private renderer: Renderer2) { }

  onScrollHandler() {
    if (this.box.nativeElement.scrollLeft === 0) {
      this.renderer.setAttribute(this.leftBut.nativeElement, "data-active", "false")
    }
    else if (this.box.nativeElement.scrollLeft >= this.box.nativeElement.scrollWidth - this.box.nativeElement.clientWidth) {
      this.renderer.setAttribute(this.rightBut.nativeElement, "data-active", "false")
    }
    else {
      this.renderer.setAttribute(this.leftBut.nativeElement, "data-active", "true")
      this.renderer.setAttribute(this.rightBut.nativeElement, "data-active", "true")
    }
  }
  rightClick() {
    this.box.nativeElement.scrollTo({
      top: 0,
      left: this.box.nativeElement.scrollLeft + this.slide.nativeElement.offsetWidth,
      behavior: "smooth",
    })
  }
  leftClick() {
    this.box.nativeElement.scrollTo({
      top: 0,
      left: this.box.nativeElement.scrollLeft - this.slide.nativeElement.offsetWidth,
      behavior: "smooth",
    })
  }
  //@Input({ required: true }) arr!: [{ "component": Component, "inputs": any }]
  //<ng-container *ngComponentOutlet="accordion" ></ng-container>

}

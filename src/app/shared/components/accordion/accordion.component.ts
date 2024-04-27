import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * **arrIn** - *[{ "id": 0, "title": "", "desc": "" }]*
 */
@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  constructor(private renderer: Renderer2) { }

  @Input() arrIn = [{ "id": 0, "title": "", "desc": "" }];
  @ViewChildren("head") heads!: QueryList<ElementRef>
  @ViewChildren("desc") descs!: QueryList<ElementRef>

  private toogleClass(el: ElementRef) {
    if (el.nativeElement.getAttribute("hide")==="true") {
      this.renderer.removeClass(el.nativeElement, "hide")
      this.renderer.setAttribute(el.nativeElement, "hide", "false")
    }
    else {
      this.renderer.addClass(el.nativeElement, "hide")
      this.renderer.setAttribute(el.nativeElement, "hide", "true")
    }
  }

  onClickHandler = (e: number) => {
    this.toogleClass(this.heads.toArray()[e - 1])
    this.toogleClass(this.descs.toArray()[e - 1])
  }
}

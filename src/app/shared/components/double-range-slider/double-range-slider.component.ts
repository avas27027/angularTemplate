import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * **max** - *number*
 * 
 * **min** - *number*
 * 
 * **step** - *number*
 */
@Component({
  selector: 'app-double-range-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './double-range-slider.component.html',
  styleUrl: './double-range-slider.component.scss'
})
export class DoubleRangeSliderComponent implements OnInit{
  
  ngOnInit(): void {
    this.fromValue = this.min
    this.toValue = this.max
  }
  @Input({ required: true }) max!: number
  @Input({ required: true }) min!: number
  @Input({ required: true }) step!: number
  @Input({ required: true }) dispach!: (response: { from: number, to: number }) => any

  fromValue = this.min;
  toValue = this.max

  @ViewChild("fromSlider") fromSlider!: ElementRef
  @ViewChild("toSlider") toSlider!: ElementRef


  sliderChangeHanlder(slider: "left" | "right") {
    if (this.fromValue >= this.max - this.step) {
      this.fromSlider.nativeElement.value = this.max - this.step * 2//Se pone *2 por que si no se bugea
    }
    else if (this.toValue <= this.min + this.step) {
      this.toSlider.nativeElement.value = this.min + this.step * 2
    }
    else if (this.fromValue >= (this.toValue - this.step)) {
      if (slider === "left") {
        this.toValue = this.fromValue + this.step * 2
      }
      else if (slider === "right") {
        this.fromValue = this.toValue - this.step * 2
      }
    }

  }
}

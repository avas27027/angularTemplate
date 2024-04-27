import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedButtonComponent } from '../../../shared/components/shared-button/shared-button.component';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { GenericCardComponent } from '../../../shared/components/generic-card/generic-card.component';
import { SlideShowComponent } from '../../../shared/components/slide-show/slide-show.component';
import { DoubleRangeSliderComponent } from '../../../shared/components/double-range-slider/double-range-slider.component';
import { Application } from '@splinetool/runtime';
import { CountersComponent } from '../../../shared/components/counters/counters.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedButtonComponent, AccordionComponent, CarouselComponent,
    GenericCardComponent, SlideShowComponent, DoubleRangeSliderComponent, CountersComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  //@ViewChild("splineCanva") splineCanva!: ElementRef
  ngOnInit(): void {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement||null;
    if(canvas != null){
      const app = new Application(canvas).load('https://prod.spline.design/Y-V4ilaohDisE8hH/scene.splinecode');
    }
  }
  
  

  accordionTest = [{ "id": 1, "title": "example1", "desc": "desc Example1" },
  { "id": 2, "title": "example2", "desc": "desc Example2" }]
  carouselTest = [{
    "id": 1, "img": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc ",
    "title": "primera card", "desc": "esta es una card", "button": "presioname"
  },
  {
    "id": 2, "img": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc ",
    "title": "primera card", "desc": "esta es una card", "button": "presioname"
  },
  {
    "id": 3, "img": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc ",
    "title": "primera card", "desc": "esta es una card", "button": "presioname"
  },
  {
    "id": 4, "img": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc ",
    "title": "primera card", "desc": "esta es una card", "button": "presioname"
  }
  ]
  slideArr = [{
    "id": 1, "url": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc "
  },
  {
    "id": 2, "url": "data:image/jpeg;base64,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"
  },
  {
    "id": 3, "url": "data:image/jpeg;base64,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"
  },
  {
    "id": 4, "url": "data:image/jpeg;base64,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"
  }
  ]
  doubleSliderHandler(response: any) {
    console.log(response)
  }
}

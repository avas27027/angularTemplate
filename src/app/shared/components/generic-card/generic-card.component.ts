import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedButtonComponent } from '../shared-button/shared-button.component';

/**
 * **img** - *string*
 * 
 * **title** - *string*
 * 
 * **desc** - *string*
 * 
 * **button** - *string*
 * 
 * width - *string*
 */
@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [CommonModule, SharedButtonComponent],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {
  @Input({required:true}) img! : string 
  @Input({required:true}) title! : string 
  @Input({required:true}) desc! : string 
  @Input({required:true}) button! : string 

  //Styles
  @Input() width : string = ""
}

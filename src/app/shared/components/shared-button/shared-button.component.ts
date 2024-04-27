import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss'
})
export class SharedButtonComponent {
  @Input({required:true}) 
  title!: string;
  @Input() 
  link: string = '';

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowLeftComponent } from './slide-show-left.component';

describe('SlideShowLeftComponent', () => {
  let component: SlideShowLeftComponent;
  let fixture: ComponentFixture<SlideShowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideShowLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideShowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

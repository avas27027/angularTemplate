import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresiveCountComponent } from './regresive-count.component';

describe('RegresiveCountComponent', () => {
  let component: RegresiveCountComponent;
  let fixture: ComponentFixture<RegresiveCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegresiveCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegresiveCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

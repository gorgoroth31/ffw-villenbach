import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fest2025Component } from './fest2025.component';

describe('Fest2025Component', () => {
  let component: Fest2025Component;
  let fixture: ComponentFixture<Fest2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fest2025Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fest2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

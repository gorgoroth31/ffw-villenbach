import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktiveWehrComponent } from './aktive-wehr.component';

describe('AktiveWehrComponent', () => {
  let component: AktiveWehrComponent;
  let fixture: ComponentFixture<AktiveWehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktiveWehrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AktiveWehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

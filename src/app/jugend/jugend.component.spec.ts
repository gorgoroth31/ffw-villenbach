import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugendComponent } from './jugend.component';

describe('JugendComponent', () => {
  let component: JugendComponent;
  let fixture: ComponentFixture<JugendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JugendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

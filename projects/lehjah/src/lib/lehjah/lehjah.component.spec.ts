import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehjahComponent } from './lehjah.component';

describe('LehjahComponent', () => {
  let component: LehjahComponent;
  let fixture: ComponentFixture<LehjahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LehjahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LehjahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

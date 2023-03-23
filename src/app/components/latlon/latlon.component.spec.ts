import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatlonComponent } from './latlon.component';

describe('LatlonComponent', () => {
  let component: LatlonComponent;
  let fixture: ComponentFixture<LatlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatlonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

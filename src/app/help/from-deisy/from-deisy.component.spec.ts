import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDeisyComponent } from './from-deisy.component';

describe('FromDeisyComponent', () => {
  let component: FromDeisyComponent;
  let fixture: ComponentFixture<FromDeisyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromDeisyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDeisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1aPageComponent } from './ex1a-page.component';

describe('Ex1aPageComponent', () => {
  let component: Ex1aPageComponent;
  let fixture: ComponentFixture<Ex1aPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1aPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1aPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

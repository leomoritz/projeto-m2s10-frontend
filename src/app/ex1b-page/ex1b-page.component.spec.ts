import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1bPageComponent } from './ex1b-page.component';

describe('Ex1bPageComponent', () => {
  let component: Ex1bPageComponent;
  let fixture: ComponentFixture<Ex1bPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1bPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1bPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

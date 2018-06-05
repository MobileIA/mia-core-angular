import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaButtonElementComponent } from './mia-button-element.component';

describe('MiaButtonElementComponent', () => {
  let component: MiaButtonElementComponent;
  let fixture: ComponentFixture<MiaButtonElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaButtonElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaButtonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

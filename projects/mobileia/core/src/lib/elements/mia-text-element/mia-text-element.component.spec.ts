import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaTextElementComponent } from './mia-text-element.component';

describe('MiaTextElementComponent', () => {
  let component: MiaTextElementComponent;
  let fixture: ComponentFixture<MiaTextElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaTextElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaTextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

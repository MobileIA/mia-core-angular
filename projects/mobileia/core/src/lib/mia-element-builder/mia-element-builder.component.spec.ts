import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaElementBuilderComponent } from './mia-element-builder.component';

describe('MiaElementBuilderComponent', () => {
  let component: MiaElementBuilderComponent;
  let fixture: ComponentFixture<MiaElementBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaElementBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaElementBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiaElementBuilderComponent } from './mia-element-builder.component';

describe('MiaElementBuilderComponent', () => {
  let component: MiaElementBuilderComponent;
  let fixture: ComponentFixture<MiaElementBuilderComponent>;

  beforeEach(waitForAsync(() => {
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

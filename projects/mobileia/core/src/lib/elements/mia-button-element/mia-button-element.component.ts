import { Component, OnInit } from '@angular/core';
import { MiaBaseElementComponent } from '../mia-base-element';

@Component({
  selector: 'mia-button-element',
  templateUrl: './mia-button-element.component.html',
  styleUrls: ['./mia-button-element.component.css']
})
export class MiaButtonElementComponent extends MiaBaseElementComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

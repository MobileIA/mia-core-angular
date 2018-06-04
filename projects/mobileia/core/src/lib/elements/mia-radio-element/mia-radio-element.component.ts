import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mia-radio-element',
  templateUrl: './mia-radio-element.component.html',
  styleUrls: ['./mia-radio-element.component.css']
})
export class MiaRadioElementComponent implements OnInit {

  @Input() field:any = {};
  @Input() form:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

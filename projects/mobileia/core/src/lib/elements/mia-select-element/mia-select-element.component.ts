import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mia-select-element',
  templateUrl: './mia-select-element.component.html',
  styleUrls: ['./mia-select-element.component.css']
})
export class MiaSelectElementComponent implements OnInit {

  @Input() field:any = {};
  @Input() form:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

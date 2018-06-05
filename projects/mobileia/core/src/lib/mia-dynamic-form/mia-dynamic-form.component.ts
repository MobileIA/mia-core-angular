import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mia-dynamic-form',
  templateUrl: './mia-dynamic-form.component.html',
  styleUrls: ['./mia-dynamic-form.component.css']
})
export class MiaDynamicFormComponent implements OnInit {

  @Output() onSend = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {

  }

}

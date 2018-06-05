import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MiaDynamicFormService {

  constructor() { }

  public generateFormGroup(fields) : FormGroup{
    let fieldsCtrls = {};
    for (let f of fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = f.required ? new FormControl(f.value || '', Validators.required)
        : new FormControl(f.value || '');
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    return new FormGroup(fieldsCtrls);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MiaDynamicFormComponent } from './mia-dynamic-form/mia-dynamic-form.component';
import { MiaElementBuilderComponent } from './mia-element-builder/mia-element-builder.component';
import { MiaTextElementComponent } from './elements/mia-text-element/mia-text-element.component';
import { MiaRadioElementComponent } from './elements/mia-radio-element/mia-radio-element.component';
import { MiaFilezoneElementComponent } from './elements/mia-filezone-element/mia-filezone-element.component';
import { MiaSelectElementComponent } from './elements/mia-select-element/mia-select-element.component';
import { MiaCheckboxElementComponent } from './elements/mia-checkbox-element/mia-checkbox-element.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoreComponent, 
    MiaDynamicFormComponent, 
    MiaElementBuilderComponent, 
    MiaTextElementComponent, 
    MiaRadioElementComponent, 
    MiaFilezoneElementComponent, 
    MiaSelectElementComponent, 
    MiaCheckboxElementComponent
  ],
  exports: [MiaDynamicFormComponent]
})
export class CoreModule { }

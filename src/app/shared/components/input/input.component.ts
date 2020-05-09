import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() label: string
  @Input() errorMessage: string


  input: any
  @ContentChild (NgModel, {static: true}) model: NgModel;
  @ContentChild (FormControlName, {static: true}) control: FormControlName;

  constructor() { }

  ngOnInit() {}


  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      console.log('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}

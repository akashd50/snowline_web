import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  inputFormControl: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.inputFormControl = new FormControl();
    this.inputFormControl.valueChanges.subscribe(newValue => {
      console.log("Value Changed: " + newValue)
    });
  }

}

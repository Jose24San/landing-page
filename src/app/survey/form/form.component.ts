import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  showForm = false;

  constructor() { }

  ngOnInit() {
  }

  displayForm() {
    this.showForm = true;
  }

}

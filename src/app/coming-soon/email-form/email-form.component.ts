import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  firstFormGroup: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
  }

}

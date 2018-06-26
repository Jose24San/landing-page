import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  showForm = true;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fitnessLevels = [
    { value: 'beginner', viewValue: 'Beginner, 1-2 years training' },
    { value: 'intermediate', viewValue: 'Intermediate, 2-4 years training' },
    { value: 'advanced', viewValue: 'Advanced, 4+ years training' }
  ];
  fitnessGoals = [
    { value: 'lose fat', viewValue: 'Lose Fat' },
    { value: 'build muscle', viewValue: 'Build Muscle' },
    { value: 'build strength', viewValue: 'Build Strength' }
  ];
  disableFinish = true;
  answers: object;
  showSpinner = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      gender: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.secondFormGroup = this._formBuilder.group({
      level: ['', Validators.required],
      goal: ['', Validators.required],
    });

    this.firstFormGroup.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.answers = this.firstFormGroup.value;
      }
    });

    this.secondFormGroup.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.answers = Object.assign(this.secondFormGroup.value, this.answers);
        this.disableFinish = false;
      }
    });
  }

  submitInfo(stepperRef) {
    console.log('ref: ', stepperRef);
    console.log('submitted this information: ', this.answers);
    this.showSpinner = true;
    
    // Submit information to firebase here

    setTimeout(() => {
      stepperRef.selectedIndex = 2;
      this.showSpinner = false;
    }, 3000);
  }

  displayForm() {
    this.showForm = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-beta-form',
  templateUrl: './beta-form.component.html',
  styleUrls: ['./beta-form.component.scss']
})
export class BetaFormComponent implements OnInit {
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
  completionMessage: string;
  stepperRef: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
    this.stepperRef = stepperRef;
    this.showSpinner = true;
    this._firebaseService.addToBetaList(this.answers, (responseType, response) => {

      if (responseType === 'success') {
        this.success();
        console.log('success: ', response);
      } else {
        this.failed();
        console.log('error message: ', response);
      }
    });
  }

  success() {
    this.completionMessage = 'Thank you for signing up! We look forward to hearing from you about our product.';
    this.showSpinner = false;
    this.stepperRef.selectedIndex = 2;
  }

  failed() {
    this.completionMessage = 'Oops looks like we are having an issue, please try again later.';
    this.showSpinner = false;
    this.stepperRef.selectedIndex = 2;
  }
}

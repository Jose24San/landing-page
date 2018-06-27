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
  stepperRef: any;
  disableFinish = true;
  completionMessage: string;
  loading = false;
  answers: object;


  constructor(
    private _formBuilder: FormBuilder,
    private _firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });


    this.firstFormGroup.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.disableFinish = false;
        this.answers = this.firstFormGroup.value;
      }
    });
  }


  submitInfo(stepperRef) {
    this.stepperRef = stepperRef;
    this.loading = true;

    this._firebaseService.addToEmailList(this.answers, (responseType, response) => {
      console.log('response: ', response);
      (responseType === 'success') ? this.showSuccess() : this.showFailed();
    });
  }

  showSuccess() {
    this.completionMessage = 'Thanks for joining the list we will let you know as soon as we are ready.';
    this.loading = false;
    this.stepperRef.selectedIndex = 1;
  }

  showFailed() {
    this.completionMessage = 'Oops looks like we are having an issues, please try again later';
    this.loading = false;
    this.stepperRef.selectedIndex = 1;
  }

}

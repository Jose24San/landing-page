import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  betaForm = false;
  emailForm = false;

  constructor() { }

  ngOnInit() {
  }

  displayForm(form) {
    if (form === 'betaForm') {
      this.emailForm = false;
      this[form] = true;
    } else {
      this.betaForm = false;
      this[form] = true;
    }
  }
}

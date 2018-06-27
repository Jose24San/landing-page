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
    this[form] = true;
  }
}

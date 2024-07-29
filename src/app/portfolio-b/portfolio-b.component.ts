import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-b',
  templateUrl: './portfolio-b.component.html',
  styleUrls: ['./portfolio-b.component.css']
})
export class PortfolioBComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted: boolean = false;
  showHeading: boolean = true;
  qualification = [{ school: '', degree: '', year: '' }]

  addQ() {
    this.qualification.push({ school: '', degree: '', year: '' })
  }

  submit() {
    this.submitted = true;
    this.showHeading = false;
  }

  edit() {
    this.submitted = false;
    this.showHeading = true;
  }
}

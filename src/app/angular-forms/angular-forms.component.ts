import { Component } from '@angular/core';
/* this is needed to use angular forms and is in charge of everything form related */
import { NgForm } from '@angular/forms';

/* template driven forms are generally defined in the @Component */
@Component({
  selector: 'app-angular-forms',/* 
  templateUrl: './angular-forms.component.html', */
  template: `
  <form class="form-container" #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <div>
    <label for="name">Name:</label>
    <input type="text"
           name="name"
           [(ngModel)]="user" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email"
           name="email"
           [(ngModel)]="email" required/>
  </div>
  <div>
    <label for="country">Country:</label>
    <select name="select" [(ngModel)]="selectedCountry">
      <option *ngFor="let country of countries" [value]="country.value">{{country.name}}</option>
    </select>
  </div>
  <div>
    <label for="city">City:</label>
    <select name="city" [(ngModel)]="city">
      <option *ngFor="let city of getCitiesByCountry(selectedCountry)" [value]="city">{{city}}</option>
    </select>
  </div>
  <button type="submit">Submit</button>
  </form>
`,
  styleUrls: ['./angular-forms.component.css']
})
/* export class AngularFormsComponent {
  user: { username: string } = { username: '' };
 */
/* pass in the reference name and type */
/* submitForm(myForm: NgForm) {
  if (myForm.valid) {
    alert("Submitted successfully, check console");
    console.log(this.user);
  }
} */

/* formSubmit(myForm: NgForm) {
  if (myForm.valid) {
    const formValues = JSON.stringify(myForm.value);
    console.log(formValues); */
/* using %c give the console css like styling  */
/* console.log('%c Form submitted successfully', 'color: green; font-weight: 400; font-size: 15px'); */
/* using an else statement, we can define form behavior if it is not valid much easier */
/*  } else {
   alert("Please fill up the required fields")
 }
}

resetValue(myForm: NgForm) { */
/* this method is provided by the NgForm class and is used to reset the form to its inital state */
/*  myForm.resetForm();
}

setDefault(myForm: NgForm) { */
/* we can also pass in an object with default values for our different fields */
/* myForm.resetForm({
  name: 'Default Name',
  email: 'defaultId@gmail.com',
});
}
} */

export class AngularFormsComponent {
  user: string = '';
  email: string = '';
  selectedCountry: string = '';
  city: string = '';

  countries = [
    { name: 'USA', value: 'usa' },
    { name: 'Canada', value: 'canada' },
    { name: 'UK', value: 'uk' },
  ];

  /* we specify the key to be of type string and eac key holds an array of strings */
  cities: { [key: string]: string[] } = {
    usa: ['New York', 'Los Angeles', 'Chicago'],
    canada: ['Toronto', 'Vancouver', 'Montreal'],
    uk: ['London', 'Manchester', 'Birmingham'],
  };

  getCitiesByCountry(country: string): string[] {
    /* we find the cities by passing the country as the key */
    /* we return an empy array if the key is not found */
    return this.cities[country] || [];
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formData = {
        user: this.user,
        email: this.email,
        country: this.selectedCountry,
        city: this.city,
      };
      console.log('Form Submitted', formData);
    } else {
      alert('Please fill up the fields');
    }
  }
}

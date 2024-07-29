import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { convertToUpperCase } from './custom-validators/upperCase-validator';

@Component({
  selector: 'app-angular-reactive-forms',
  templateUrl: './angular-reactive-forms.component.html',
  styleUrls: ['./angular-reactive-forms.component.css']
})
export class AngularReactiveFormsComponent {
  /* we use the provided reference to create an instance of the FormControl class*/
  /* this way we can keep track of its behavior */
  /* we now set an initial value and an array of validators  */
  /* usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10), */
  /* regex for alpha numeric values only */
  /*   Validators.pattern('^[a-zA-Z0-9]+$')
  ]); */

  /* showValue() { */
  /* now we have access to that forms info */
  /*    console.log('Value: ', this.usernameControl.value);
     console.log('Validation Status: ', this.usernameControl.valid);
     console.log(this.usernameControl.errors);
   } */

  /* use the name of the form instance  */
  /*   myForm: FormGroup; */

  /*   constructor() {
      this.myForm = new FormGroup({ */
  /* now we can add different validators to our different controls */
  /*       name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', Validators.min(18))
      });
    } */

  /* we can also do it this way but it is a better practice to use a contructor */
  /* myForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', Validators.min(18))
  }); */

  /*   submitForm() { */
  /* we use ? incase we have null errors */
  /*     const userAge = this.myForm.get('age')?.value;
      if (userAge < 18) {
        alert('Age must be 18 or older');
        return;
      } else if (this.myForm.valid) {
        console.log(this.myForm.value);
      }
    } */

  /*   employeeForm: FormGroup; */

  /* FormBuilder helps create form groups and constrols without creating instances */
  /* the code below is a simplified version of our previous constructor */
  /*   constructor(private fb: FormBuilder) {
      this.employeeForm = this.fb.group({
        employees: this.fb.array([]),
      });
    } */

  /*   constructor() {
    this.employeeForm = new FormGroup({ */
  /* the syntax to initiate a FormArray and we keep it empty at first  */
  /* we can also dynamically populate the form later if we keep it empty */
  /*       employees: new FormArray([]),
      });
    } */

  /*   addEmployee(): void {
      const employeeGroup = new FormGroup({
        name: new FormControl(''),
        job: new FormControl(''),
      });
      this.employees.push(employeeGroup);
    } */

  /* we can simplify the above code into this */
  /* addEmployee(): void {
    const employeeGroup = this.fb.group({
      name: [''],
      job: [''],
    });
    this.employees.push(employeeGroup);
  } */

  /* we need this to access the employees array from the employeeForm */
  /* s */

  /*   myForm: FormGroup;
    nameControl: FormControl;
    emailControl: FormControl;
  
    constructor() {
  
      this.nameControl = new FormControl('', Validators.required);
      this.emailControl = new FormControl('', [Validators.required, Validators.email]); */

  /* we need to instantiate formControl instances on their own variables to use validation messages */
  /* we then use them in our formGroup like normal */
  /*     this.myForm = new FormGroup({
        name: this.nameControl,
        email: this.emailControl
      });
    }
    formSubmit(){
      if(this.myForm.valid){
        console.log(this.myForm.value);
      }
    } */

  /******************************** using form builder *****************************************/
  /* 
    step: any = 1;
    isSubmitted: boolean = false;
    myForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
      this.myForm = this.formBuilder.group({
        userDetails: this.formBuilder.group({
          fname: ['', Validators.required], */
  /* whenever we have more that 2 validators using the formBuilder syntax, we need to put them in an array */
  /*         email: ['', [Validators.required, Validators.email]],
          password: ['', [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!*&])(?!\s).*$/)
          ]],
        }),
        additionalDetails: this.formBuilder.group({ */
  /* Same validator array in this one too */
  /* including regex for a valid phone number */
  /*         mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
          address: ['', Validators.required],
          country: ['', Validators.required],
          gender: ['', Validators.required],
        }),
        feedback: this.formBuilder.group({
          comments: [''],
        })
      });
    }
   */
  /* we can simply access this as userDetails.get('formControlName') and use the build in methods */
  /* as we are getting it as type FormGroup. Methods such as the ?.invalid */
  /*   get userDetails() {
      return this.myForm.get('userDetails') as FormGroup;
    }
    get additionalDetails() {
      return this.myForm.get('additionalDetails') as FormGroup;
    }
  
    btnPrevious() {
      this.step -= 1;
    }
    btnNext() { */
  /* this is how we access info from the formBuilder */
  /* we simply use the get method and grab it as a FromGroup type object */
  /*     const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
      const additionalDetailsGroup = this.myForm.get('additionalDetails') as FormGroup;
  
      if (userDetailsGroup.invalid && this.step === 1) {
        return;
      }
      if (additionalDetailsGroup.invalid && this.step == 2) {
        return;
      }
      if (this.step < 3) {
        this.step += 1;
      }
    }
    formSubmit() {
      if (this.myForm.valid) {
        this.isSubmitted = true;
      }
      console.log(this.myForm.value);
    } */

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      /* we skip the Validators.function syntax and use only the name  */
      name: ['', [Validators.required, convertToUpperCase]],
    });
  }
  formSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

}

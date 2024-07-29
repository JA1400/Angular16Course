import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Host, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DecoratorsComponent } from './decorators/decorators.component';
import { EmployeeService } from './dependencies/employee.service';
import { LogMessage1Service } from './services/log-message-1.service';
import { LogMessage2Service } from './services/log-message-2.service';
import { AdminDataService } from './services/admin-data.service';
import { MessageService } from './services/message.service';
import { AppUpdateService } from './services/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* export class AppComponent { */
/* a = 10;
b = 5;
//this is needed to read class variables
ans = this.a + this.b; */
/* inputVal = 'Hello';
isDisabled = false; */
/* imgSrc = '/assets/angularIMG.jpg'; */
//give data type in TypeScript
/* display(msg: string) {
  alert(msg)
}
counter = 0;
incr() {
  this.counter++
} */
/* any will allow any type of argument */
/* onKeyPress(e: any) {
  console.log(e.target.value);
}
isShift(){
  console.log('Shift + y is pressed');
} */
/* variable name followed by type */
/* staticInput:string = "Static two-way binding";
dynamicInput: string = '';
count = 0;
counterF(type:string){
  type==='incr'?this.count++ : this.count--;
} */
/* display = true;
num = 2;
dElement = true;
show() { */
/* unlike regular js, this statement will turn the variable to true if !variable is false */
/* and vice-versa */
/* ! is used to achieve this behavior */
/*   this.dElement = !this.dElement;
} */
/* fullStackDev = [{
  id: 1,
  name: 'Angular'
},
{
  id: 2,
  name: 'React'
},
{
  id: 3,
  name: 'Node.js'
},
{
  id: 4,
  name: 'MongoDN'
}];
showL: boolean = false;
listItems = [
  {
    name: 'Alex',
    age: 23,
  },
  {
    name: 'Jack',
    age: 25,
  },
  {
    name: 'Ryan',
    age: 27,
  },
  {
    name: 'Shawn',
    age: 24,
  },
  {
    name: 'Bella',
    age: 29,
  },
  {
    name: 'Peter',
    age: 32,
  },
];
age: number = 0;
isEligible: boolean = false;

checkEligibility() {
  this.isEligible = this.age >= 18;
} */
/* is needed for ngClass to work as it looks for a variable */
/* updateStyles = 'updateStyles'
hasText : boolean = false;

textInput(e:any){
  this.hasText = e.target.value !=='';
} */
/* colorMode = 'light-mode';
toggleMode() {
  if (this.colorMode === 'light-mode') {
    this.colorMode = 'dark-mode';
  } else {
    this.colorMode = 'light-mode';
  }
} */
/* applyVal = {
  color: 'darkgreen',
  'font-style': 'italic',
  'font-size': '25px'
} */

/* nm: string = '';
em: string = '';
emailIsValid: boolean = false;
formSubmitted: boolean = false;
 
checkEmailValidation(em: string): void {
  if (em.includes('@') && em.includes('.com')) {
    this.emailIsValid = true;
  } else {
    this.emailIsValid = false;
  }
}
showMessage() {
  if (this.nm && this.emailIsValid) {
    this.formSubmitted = true;
  } else {
    this.formSubmitted = false;
  }
} */

/* subjectList = [
  {
    subCode: 101,
    name: 'JavaScript'
  },
  {
    subCode: 102,
    name: 'C#'
  },
  {
    subCode: 103,
    name: 'NodeJS'
  }
] */

/*  isAuthorized : boolean = true;
 listItems = ['ItemA', 'ItemB', 'ItemC', 'ItemD']; */

/* user: string = '';
a = 10;
b = 20;
calc() {
  return this.a + this.b;
} */
/* 
  nm = '';
  seven: boolean = false;
 
  textChange() { */
/* this.dElement = !this.dElement; */
/* type==='incr'?this.count++ : this.count--; */
/*   this.nm.length >= 7 ? this.seven = true : this.seven = false;
} */

/* inputValues: string = 'Initial Value';
updateValue() {
  this.inputValues = 'AppComponent';
} */

/* constructor() {
  console.log('Calling from constructo -', this.inputValue);
} */

/*  user = {
   name: 'ABC'
 }; */
/* updating a sinlge property, does not trigger the change in onChanges */
/* changeUserName() {
  this.user.name = 'XYZ'
} */
/* } */

/* export class AppComponent implements DoCheck{
  dFP = '';
 */
/*  ngAfterContentInit(): void {
   console.log("Hook was invoked");
 } */

/*   ngDoCheck(): void {
      console.log("DoCheck invoked");
  }

  sendData(): void {
    let random = Math.floor(Math.random() * 10)
    this.dFP = 'Random Number: ' + random;
  }
} */

/* export class AppComponent implements OnInit {
  displayComponent: boolean = true;
  toggle() {
    this.displayComponent = !this.displayComponent;
  }

  ngOnInit(): void {
    console.log("onInit invoked");
  }
} */


/* Decorators ********************************************* */
/* export class AppComponent */ /* implements AfterViewInit */ /* { */
/* displayMessage: string = 'Message from parent component'; */

/* courses: { id: number, name: string }[] = [
  { id: 1, name: 'JS course' },
  { id: 2, name: 'JAVA course' },
  { id: 3, name: 'C# course' },
  { id: 4, name: 'Python course' }
] */

/* message: string = ''; */

/* We recieve that event/message via a parameter */
/* receiveChildEvent(eventData: string) {
  this.message = eventData;
} */

/* itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

addItem() {
  const newItem = `Item ${this.itemsArr.length + 1}`
  this.itemsArr.push(newItem)
}

deleteItem(index: number) {
  if (index >= 0 && index < this.itemsArr.length) {
    this.itemsArr.splice(index, 1);
  }
}

ngOnInit(): void {
  console.log("Parent Compnent Initialized");
} */

/* DOM Manipulation */
/* the ? lets angular know that there is no value initially */
/* @ViewChild(DecoratorsComponent) childComponent?: DecoratorsComponent; */
/* here we use a reference value instead and therfore need to use ElementRef */
/* Good practice to inlcude the type of element referenced */
/* @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>; */

/* While we can access methods and properties, this is NOT recommended */
/* incrementChildCounter() {
  console.log(this.childComponent);
  this.childComponent?.incrementCount();
} */

/* when dealing with DOM manipulation, it is a good practice to do it in this hook */
/* ngAfterViewInit(): void { */
/* nativeElement is provided by ElementRef to target the DOM element */
/*   if (this.btnRef?.nativeElement) {
    this.btnRef.nativeElement.innerHTML = "Counter ++"
  }
} */
/* @ViewChild('colorInput') colorInput?: ElementRef;

@HostBinding('style.backgroundColor') selectedColor!: string; */

/* since we pass an argument to the hostListener, we need an argument to our method too */
/* @HostListener('input', ['$event.target.value']) onColorChange(color: string) {
  this.selectedColor = color;
}

ngAfterViewInit(): void {
  this.selectedColor = this.colorInput?.nativeElement.value;
} *//* 
} */

/* export class AppComponent {
  employees: any[];
  empId: number = 0;
  emp: any; */

/* we use this constructor to initiate the service */
/* this is called contructor injection using a variable of type service */
/*  constructor(private e: EmployeeService) { */
/* we grab the array from the service and bind it to our variable */
/*   this.employees = this.e.getEmployees();
}
 
showDetails(employeeId: number) {
  this.empId = employeeId; */
/* we can access the data and functions or the service everywhere */
/*     this.emp = this.e.getEmployeeById(employeeId);
  }
} */

export class AppComponent {
  /* This is how we us a type token */
  /* constructor(public logger: LogMessage1Service) {
    this.logger.log()
  } */

  /* This is how we use a string token= */
  /* constructor(
    @Inject('LOG_MSG1') public logger: LogMessage1Service,
    @Inject('LOG_MSG2') public msg: LogMessage2Service) {
    this.logger.log()
    this.msg.log()
  } */
  /* constructor(
    @Inject('LOG_MSG1') public logger: LogMessage1Service) {
    this.logger.log()
  } */

  /* using useValue */
  /* constructor(@Inject('STR_MSG') public msg: string) { } */

  /* no need for the @Inject since we are providing an access modifier and automatically gets injected  */
  /* We use our created service and assign it a variable name to use */
  /* constructor(public getAdmin: AdminDataService) { } */

  /* constructor(private alert: LogMessage1Service) { }
  displayAlert() {
    this.alert.showAlert();
  } */

  /* constructor(private msg: MessageService) {
    console.log(this.msg.msg());
  } */

  /* message: string = '';

  constructor(private appUp: AppUpdateService) {
    this.message = this.appUp.getAppUpdate();
  } */

  /* constructor( */
    /* useFactory is great for dynamic value including async functions*/
  /*   @Inject('GREETING_MESSAGE_FACTORY') public factoryMessage: string, */
    /* useValue is great for static values like config options */
  /*   @Inject('GREETING_MESSAGE_VALUE') public valueMessage: string
  ) {
    console.log("useFactory Message : ", factoryMessage);
    console.log("useValue Message : ", valueMessage);
  } */
}


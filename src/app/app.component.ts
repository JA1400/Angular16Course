import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Host, HostBinding, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DecoratorsComponent } from './decorators/decorators.component';
import { EmployeeService } from './dependencies/employee.service';
import { LogMessage1Service } from './services/log-message-1.service';
import { LogMessage2Service } from './services/log-message-2.service';
import { AdminDataService } from './services/admin-data.service';
import { MessageService } from './services/message.service';
import { AppUpdateService } from './services/app-update.service';
import { Observable, of, from, interval, timer, EMPTY, map, filter, fromEvent, mergeMap, concat, concatMap, take, switchMap } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // the osbervable pip automatically subscribes and unsubcribes when the work is done
  // the pipe also only returns the las value of the observable
  /* template: `
  <h1>Understanding Async Pipes</h1>
  <p>{{value$ | async}}</p>
  `, */
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
/*
export class AppComponent { */
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
/* } */

//Observables and Async
// export class AppComponent {
//   constructor() {
//     //We can create the instance of the observable right away to view its methods
//     //and properties but it is not a good practice to do so. 
//     //we generally use it on the ngOnInit() hook
//     const observable = new Observable((observer) => {
//       console.log('Observable Executed!')
//       //this is how we access the observable
//     }).subscribe();
//   }
// }

/* export class AppComponent {
  observable = new Observable((observer) => {
    //without the next method, the observable cant communicate any data to the subscriber
    observer.next('hello');
    observer.error('An error occurred')
    observer.complete()
    //we then use this syntax to grab that value in the subscribe method
  }).subscribe({
    next(value){
      console.log("Recieved value: ", value);
    },
    //this is how we would handle errors!
    //if an error is found, the observable stops
    error(err){
      console.log('Error: ', err);
    },
    //this is just triggered to let us know that the observable is completed.
    complete(){
      console.log("Observable completed!");
    }
  })
} */

/* export class AppComponent {
  observalbe = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.error(5);
    setTimeout(() => {
      console.log("After two seconds!");
      observer.next(4);
      observer.complete();
    },2000)
  })
  // we need to put setup tasks or any other initialization ina constructor to prevent errors
  // especially if we have console statements
  constructor(){
    console.log('Before Subscribe');
    this.observalbe.subscribe({
      next(x){
        console.log("Value: x");
      },
      error(e){
        console.error("Error occurred: ", e);
      },
      complete(){
        console.log("Observable successfully executed!");
      }
    });
    console.log("After Subscribe");
  }
} */

//unsubscribing from observables
/* export class AppComponent {
  observable = new Observable<number>((observer) => {
    let count: number = 0;

    const interval = setInterval(() => {
      observer.next(count++);
    }, 1000)

    //good practice to write code like this, especially in this case where we need to stop
    //the interval from going on.
    return () => {
      clearInterval(interval);
      console.log("Interval Cleared");
    }
  })

  constructor() {
    //this way we can access the observable elsewhere
    const obs = this.observable.subscribe((data) => {
      console.log("Data: ", data);
    });

    setTimeout(() => {
      //important to unbuscribe from infinte observables
      obs.unsubscribe();
      console.log("Unsubscribed");
    }, 4000);
  }
} */

//async pipes
/* export class AppComponent {
  //common naming convetion for observables can also be $name || name$ 
  value$: Observable<number>;

  constructor() {
    this.value$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.complete();
      }, 2000)
    })
  }
} */

/* export class AppComponent {
  //common naming convetion for observables can also be $name || name$ 
  value$: Observable<any>;

  constructor() {
    this.value$ = new Observable((observer) => {
      setInterval(() => {
        const date = new Date();
        const estTime = date.toLocaleString('en-US',
          {
            timeZone: 'America/New_York',
            dateStyle: 'full',
            timeStyle: 'full'
          });
        observer.next(estTime);
      }, 1000)
    })
  }
} */

/* export class AppComponent {
  //if we plan to leave a variable undefined, we can simply specify it with the undefined pipe
  jsonData$: Observable<any> | undefined;

  constructor() {
    this.fetchData()
  }

  fetchData() {
    this.jsonData$ = new Observable<any>((observer) => {
      //we set out fetch method
      fetch('https://dummyjson.com/products/categories')
        //we get a response with a status code.
        //we use .json to obtain the actual data in the body
        .then(response => response.json())
        //this returns another promise so we use another .then to view that data
        .then((data) => {
          //here we pass that data to our observer
          console.log(data);
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    })
  }
} */

//RxJS in depth
/* export class AppComponent {
  constructor() {
    //the of() function will turn that variable of const into an observable
    //we can pass in objects, arrays, and functions besides just values
    //each argument becomes a next() notification ie. observer.next(val1), observer.next(val2)
    const observable = of({ name: 'ZYQ', age: 25 }, [1, 2, 3, 4], function msg() { return 'msg from funct' })
    observable.subscribe(val => console.log(val));
  }
} */

/* export class AppComponent implements OnInit {
  ngOnInit() {
    //just like the of(), from() creates observables but will emit the value one by one
    //unlike the of() which will emit the whole piece of data at once. 
    //const arr = from([1,2,3,4,5]);
    const p = from(new Promise(resolve => resolve('this is a promise')));
    p.subscribe(val => console.log(val))
  }
} */

/* export class AppComponent implements OnInit {

  ngOnInit(): void {
    //works just like observable.next() to emit its value and wont start its first 
    //until the timer has gone by
    //it only emits integer values by default, but in advance applications, can emmit other data too
    const obs = interval(1000);
    //needed so we can ubsubscribe later
    const obsSub = obs.subscribe(val => console.log(val))
    
    setTimeout(() => {
      console.log("Ubsubscribed from interval");
      //intereval will run indefinetly so we need to unsubscribe manually
      obsSub.unsubscribe();
    }, 5000)
  }
} */

/* export class AppComponent implements OnInit {
  ngOnInit(): void {
    //timer works like the interval, except it has a dueTime and a periodScheduler
    //dueTime is the first argument that determines when it starts
    //periodScheduler is the time it takes to repeat afterwards
    //in scenerios where we need the funciton to run right away, the timer can be a better choice
    const timerObs = timer(0, 2000)
    timerObs.subscribe(val => console.log(val))
  }
} */

//timer animation
/* 
export class AppComponent implements OnInit {
  fetchData: string = '';
  isLoading: boolean = true;
  
  ngOnInit(): void {
    timer(3000).subscribe(() => {
      this.isLoading = false;
      this.fetchData = 'Timer function executed... '
    });
  }
} */

/* export class AppComponent implements OnInit {
  ngOnInit(): void {
    //is an observable that only returns the complete() function
    //EMPTY.subscribe({
    //  next: ()=> console.log('Next'),
    //  complete: ()=> console.log('Completed')
    //})
    const src1 = of(1,2,3);
    const src2 = EMPTY;

    src1.subscribe({
      next: (value) => console.log('Source 1 Next: ', value),
      complete: () => console.log('Source 1 Complete')
    })
    //an EMPTY observable is used mainly when representing an epty stream of data 
    //but is not similar to the complete() function
    src2.subscribe({
      next: (value) => console.log('Source 2 Next: ', value),
      complete: () => console.log('Source 2 Complete')
    })
  }
} */

//export class AppComponent implements OnInit {
/* ngOnInit(): void {
  const obs$ = of(1, 2, 3, 4, 5, 6)
  //we use this in conjuction with the map function to manipulate each piece of data
  const newObs$ = obs$.pipe(
    //works much like the regular Array.map() but on observables
    map(num => num * 2)
  );
  newObs$.subscribe(val => console.log("New Obs value: ", val))
} */
/* ngOnInit(): void {
  const obs$ = of('Milwaukee', ' Chicago', 'Manhattan')
  const newObs$ = obs$.pipe(
    map(num => num.toUpperCase())
  );
  newObs$.subscribe(val => console.log("New Obs value: ", val))
} */
/* ngOnInit(): void {
  const num$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const even$ = num$.pipe(filter(val => val % 2 == 0))
  const odd$ = num$.pipe(filter(val => val % 2 != 0))
 
  console.log('Even numbers: ');
  even$.subscribe(res => console.log(res));
 
  console.log('Odd numbers: ');
  odd$.subscribe(res => console.log(res));
} */

//a ? to keep the observable initially undefined
/* cursorPosition$?: Observable<{ x: number, y: number }>;
 
ngOnInit(): void {
  //fromEvent() emits observable events registered through the targets listeners handlers
  //essentially returns even objects from DOM events that have fired
  //takes two arguments: Target element & Event, just like a DOM event listener
  this.cursorPosition$ = fromEvent<MouseEvent>(window, 'mousemove')
    .pipe(
      //this is known as a project function
      map((event) => ({ x: event.clientX, y: event.clientY }))
    )
} */

/* outerObs$ = from([1, 2, 3, 4, 5])
innerObs$ = (value: number) => of(value * 2)
 
//we apply this mergeMap to the outter observable
flattenObs$ = this.outerObs$.pipe(
  //mergeMap will automatically pass the outer observable value into our inner observable
  //so that we only get one value in return
  mergeMap(this.innerObs$)
)
ngOnInit(): void {
  this.flattenObs$.subscribe((res) => console.log(res))
} */
/*   users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];
 
  courses = [
    {
      courseId: 1,
      title: 'JavaScript - Marathon Interview Questions Series'
    },
    {
      courseId: 2,
      title: 'Mastering React With Interview Questions,eStore Project',
    },
    {
      courseId: 1,
      title: 'Mastering TypeScript with Marathon Interview Questions',
    },
    {
      courseId: 3,
      title: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
    },
    {
      courseId: 3,
      title: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
    },
  ];
 
  ngOnInit(): void {
    //we pass in the array of users
    from(this.users)
      .pipe(
        //for each user in the array we do the following
        mergeMap((user) => {
          //in our callback function, we use filter on the courses observable
          const courseData = this.courses.filter(
            //for each course we compare the courseid in courses to that in user to return matches
            (course) => course.courseId === user.id
          );
          //we then return am observable with this specific user and the courses attached to it
          return of({ user, courses: courseData });
        })
      )//we finally subscribe to our from() observable to view each user and their courses
      .subscribe((res) => {
        console.log('Combined User & Courses: ', res);
      });
  }*/

/* srcObs$ = of(1, 2, 3);
innerObs$ = of('A', 'B', 'C');

ngOnInit(): void {
  this.srcObs$.pipe(
    //concatMap will run the outer or first observable and for each of its values, 
    //it will subscribe to the inner or second observable entirely
    //the original values of the source observable remain intact while it 
    //creates a new inner observable with each value of its source
    //we use this when we need to keep a strict order when making sequential http fetch 
    //requests from multiple sources.
    concatMap((val) => {
      console.log('Source Value: ', val);
      console.log("Starting new observable");
      return this.innerObs$;
    })
  )
  .subscribe((res) => {
    console.log("Reading " + res);
  })
} */

/* source$ = of(1, 2, 3);

ngOnInit(): void {
  this.source$.pipe(
    //unlike concatMap, switchMap will fininsh the task of the source observable
    //before switching over entirely to the inner or next observable. 
    //it will cancel the execution of any inner observevable and only execute the last one
    //once the source or first one is done.
    //this is usefull with http requests when we need to cancel the previous request 
    //and move over to a new one as the old one is cancelled completely
    switchMap((val) => {
      console.log("Source Value: ", val);
      console.log("Starting new observable");
      //limits the number of emmissions from the observable to only the first 3, as seen by the argument 
      //good when we need a finite number of emitted values from an observable. 
      return interval(1000).pipe(take(2))
    })
  )
    .subscribe((val) => {
      console.log('Internal Value: ' + val);
    })
} */
//}

//httpClient
/* export class AppComponent { */
/*   responseData: any;
  loadData: boolean = false;
 
  //we need to inject the http client service in a constructor to use it
  constructor(private http: HttpClient) { }
 
  getData() {
 
    //to make a request using that httpClient, we use the get() method
    //this method much like fetch, is async
    this.http.get('https://jsonplaceholder.typicode.com/users')
      //se subscribe to it just like with an observable
      .subscribe((data) => {
        this.responseData = data;
        this.loadData = true;
      })
  } */
/* 
  responseData$?: Observable<any>;
  loadData: boolean = false;
 
  constructor(private http: HttpClient) { }
 
  getData() {
    this.responseData$ = this.http.get('https://jsonplaceholder.typicode.com/users')
    this.loadData = true;
  } */

/* constructor(private http: HttpClient) { }

postData() {
  const user = {
    id: 201,
    name: 'XYZ',
    email: 'xyz@gmail.com'
  }
  //post() takes a destination url as well as the body
  this.http.post('http://localhost:3000/users', user)
    .subscribe((res) => {
      console.log("User Updated: ", res);
    })
} */

/* putData() {
  const user = {
    id: 2,
    name: 'ABC',
    email: 'abc@gmail.com'
  }
  //much like in express, we are essentially using a REST api model
  this.http.put('http://localhost:3000/users/2', user)
    .subscribe((res) => {
      console.log("User Updated: ", res);
    })
} */

/* putData() {
  //we need to specify any to prevent type errors when setting new values
  this.http.get<any>('http://localhost:3000/users/3')
    .subscribe((updatedData) => {
      updatedData.name = "NOP";
      updatedData.email = "nop@gmail.com";

      //we can run this inside out get and simply specify which value to update 
      //and pass our body in 
      this.http.put('http://localhost:3000/users/3', updatedData)
        .subscribe({
          next: (response) => {
            console.log("User Updated: ", response);
          },
          error: (err) => {
            console.log("Error updating the data: ", err);
          }
        })
    })
}

deleteData() {
  this.http.delete('http://localhost:3000/users/4')
    .subscribe({
      next: (res) => {
        console.log("User Deleted! ", res);
      },
      error: (err) => {
        console.log("Error deleting user: ", err);
      }
    })
}
} */

export class AppComponent { 
  
}

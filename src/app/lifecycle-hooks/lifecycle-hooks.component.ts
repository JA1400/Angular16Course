import { Component, Input, OnChanges, SimpleChanges, OnInit, INJECTOR, DoCheck, AfterContentInit, ViewChild, ElementRef, ContentChild, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
/* 
export class LifecycleHooksComponent implements OnChanges { */
/* Used to pass a value from a parent to child component */
/*   @Input() inputValue: string = ''; */

/* use | when uncertain of what value to initialize a property */
/*   previousVal: string | undefined;
  currentVal: string | undefined; */
/* detects changes in the data and SimpleCahnges detects it to then reflect it in the output */
/*   ngOnChanges(changes: SimpleChanges): void { */
/* use brackets to allow the changes object to access the inputValue property */
/* this allows us to keep track of any change in inputValues property from parent */
/*     if (changes['inputValue']) {
      this.previousVal = changes['inputValue'].previousValue;
      this.currentVal = changes['inputValue'].currentValue;
      console.log(changes);
    }
  }
} */

/* export class LifecycleHooksComponent implements OnInit {
  count: number = 0; */
/* good practice to initialize properties, API requests .ect in the ngOnInit instead of the contructor */
/* constructor will run first and its best to let it fully render before initializing conponent properties */
/*   ngOnInit(): void {
    this.startCounter();
  }
  startCounter() {
    setInterval(() => {
      if (this.count <= 5) {
        console.log(this.count++);
      }
    }, 1000)
  }
} */

/* export class LifecycleHooksComponent implements OnChanges {
  @Input() user: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called: ", changes);
  }
} */

/* should not be used with onChanges */
/* export class LifecycleHooksComponent implements DoCheck {
  @Input() user: any;
  private previousUserName: string | undefined;
  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
      console.log("ngDoCheck called - User name changed: ", this.user.name);
    }
  }
} */

/* AfterContentChecked used for tasked that incolve checking and responding to changes in the content */
/* common for debugging */
/* export class LifecycleHooksComponent implements AfterContentInit, AfterContentChecked, AfterViewChecked {

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit was invoked");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContenChecked was invoked");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked was invoked")
  }
} */

export class LifecycleHooksComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log("onInit invoked");
  }

  ngOnDestroy(): void {
    console.log("onDestroy invoked");
  }
}

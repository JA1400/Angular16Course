import { Component, computed, effect, OnInit, signal, untracked, WritableSignal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {
  //signal needs an initial value and cannot be left empty
  /*   count = signal<number>(0)
   */
  //we implement ngOnInit to be able to manipulate the signal properties
  /* cart = signal({
    name: 'Product 1',
    email: 'abc@example.com'
  }) */
  /* 
    arr = signal([1, 2, 3, 4, 5])
  
    modifyArray() {
      this.arr.mutate((val) => val[0] = 10)
    }
  
    cart = signal([
      {
        name: 'Product 1',
        email: 'abc@example.com'
      },
    ]) */

  /*   incrCounter() {
      //signals are writeable so we can change its value at any time
      //this.count.set(this.count() + 1);
  
      //with update() we can give a callback function and 
      //pass in the value of our signal as an argument
      this.count.update(val => val + 1);
  
      //we use () to get the variable or value of the signal
      //if we dont, we get the signal function
      //we use signals so that angular doesnt need to run a detection
      //cycle on all of the components everytime we need a value to change
      //this improves performance in the long run as only the component with
      //the signal has to run the detection cycle
      console.log("Signal value, ", this.count());
    } */

  /*   ngOnInit(): void {
  
      //console.log('Original cart: ', this.cart());
      //this.cart.update((cartDetails) => ({
      //we use the spread operator to keep its current properties
      //  ...cartDetails,
      //  qty: 3,
      //  name: 'Product 2'
      //}));
      //console.log('Updated cart: ', this.cart());
  
      //mutate() is async and will return an array
      //this does not mutate the original array
      this.cart.mutate((cartDetails) => [
        cartDetails.push({ name: 'product2', email: 'prq@example.com' }),
        cartDetails.push({ name: 'product3', email: 'ads@example.com' })
  
      ])
      console.log(this.cart());
    } */

  /*   todoName = '';
    todos: WritableSignal<string[]> = signal([]);
  
    //we will refer to the value inside the input field 
    addTodo(todo: HTMLInputElement): void {
      //we grab the input field value
      const item = todo.value;
      //we pass in that value in the update method as well as spreading in the 
      //already present items, displaying the new item at the top 
      this.todos.update(todos => [item, ...todos]);
      //the reason as to why use HTMLInputElement
      //we a re able to set its values
      todo.value = '';
      //as well as refocus to the input value when we add an item to the list
      todo.focus();
    } */

  /*   removeTodo(index: number): void {
      this.todos.mutate((i) => {
        //Splice(starting index, # to be removed, || item to be added)
        i.splice(index, 1)
      })
    } */

  // Computed Signals

  /*   count = signal(20);
    //computed signal is not writeable, so we cannot assign values to it
    //they are dynamic signals
    remainingCount = computed(() => 100 - this.count()) */

  //takes a callback function and executes it when it detects a change
  //in the signal values
  //signalEffect = effect(() => {})

  //we can also define it in the constructor without a variable name
  /*   constructor() {
      //effect runs atleast one but will only display the current value
      //it will run on every signal change and tracks all signals
      //effect() is also async
      effect(() => {
        if(this.sumArr() > 30) alert('More than 30')
        console.log("Not Max Yet!");
      })
    }
  
    arr = signal([1, 2, 3, 4]);
    sumArr = computed(() => this.arr().reduce((sum, i) => sum + i));
  
    count = signal(20);
    remainingCount = computed(() => 100 - this.count());
  
    modifyArray() {
      this.arr.mutate(val => val.push(10));
    } */

  /* counter1 = signal(0);
  counter2 = signal(0);

  counterUpdate = effect(() => {
    //with untracked() Angular will no longer track or notify 
    //changes with the specified signal
    //counter1 will trigger the effect but not counter2
    //ment to be used where re-evaluations are unnecessary
    console.log(`Counter 1: ${this.counter1()}
    \nCounter 2: ${untracked(() => this.counter2())}`);
  })

  updateCounter1() {
    this.counter1.update(() => this.counter1() + 1)
  }
  updateCounter2() {
    this.counter2.update(() => this.counter2() + 1)
  } */

  /* Cart Mini project */
  newItemName: string = '';
  //add an OR just in case the number is left empty
  newItemPrice: number | null = null;

  items = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 12 },
  ]

  itemList = signal(this.items);
  totalPrice = computed(() => {
    //acc is the value of the previous call
    //curr is the current value
    //0 is the initial value
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0)
  })

  resetFields() {
    this.newItemName = '';
    this.newItemPrice = null;
  }

  addItem() {
    if (this.newItemName && this.newItemPrice != null) {
      const newItem = { name: this.newItemName, price: this.newItemPrice }
      this.itemList.set([...this.itemList(), newItem]);

      this.resetFields();
    }
  }

  removeItem(item: { name: string, price: number }) {
    //we use filter and simply compare our parameter item to every item in the list
    this.itemList.set(this.itemList().filter((i) => i != item))
  }
}

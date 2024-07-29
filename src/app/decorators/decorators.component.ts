import { Component, Input, InputDecorator, Output, EventEmitter, OnInit, OnDestroy, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent /* implements AfterContentInit */ {
  /* we use the @Input() to recieve data from the parent component to the child component */
  /* @Input() receiveMessage: string = ''; */
  /* @Input() showData: { id: number; name: string }[] = []; */

  /* EventEmitter is always used along with Output() due to the event raised by the child component */
  /* Both work together to raise custom events */
  /* @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit('Event emitted from child component');
  } */

  /* @Input() items: string[] = [];

  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number) {
    this.itemDeleted.emit(index)
  }

  ngOnInit(): void {
    console.log("Child Component is Initialized");
  }

  ngOnDestroy(): void {
    console.log("Child Component is Destroyed");
  } */

  /* DOM Manipulation */
  /* count: number = 0;

  incrementCount() {
    this.count++;
  } */

  /* Used to display content when using content projection AKA ng-content */
  /* @ContentChild('showPara') paraRef?: ElementRef; */

  /* @ContentChild is commonly used with this hook */
  /* ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = "Italic";
    content.style.fontWeight = '350';
    content.style.color = '#afeeee';
    console.log(this.paraRef);
  } */
}

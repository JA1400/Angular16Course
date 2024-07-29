import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

/* a custom diractive commonly used to apply CSS style properties or DOM related tasks */
@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective/*  implements OnInit */ {
  /* in real world scenarios it is used for styling directives or attribute manipulation, third */
  /* party integrations and animating the directives */
  /* @HostBinding('style.backgroundColor') bgColor?: string; */
  /* we can create several properties */
  /* @HostBinding('style.color') textColor?: string; */

  /*  colorArray = [
     '#e94b3cff',
     '#2d2926ff',
     '#2a3132',
     '#343148ff',
     '#07575b',
     '#1e1f26'
   ] */

  /* recommended to use with ngOnInit hook */
  /* ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.textColor = '#101820ff';
  } */

  /* basically an event listener */
  /* @HostListener('click') onToggle() { */
  /* if (this.bgColor === '#f2aa4cff') {
    this.bgColor = '#101820ff';
    this.textColor = '#f2aa4cff'
  } else {
    this.bgColor = '#f2aa4cff';
    this.textColor = '#101820ff';
  } */

  /*  this.setRandomColor();
 } */

  /* private setRandomColor() {
    const colorPick = Math.floor(Math.random() * this.colorArray.length)

    if (this.bgColor !== this.colorArray[colorPick]) {
      this.bgColor = this.colorArray[colorPick];
      this.textColor = '#ccc'
    } else {
      this.setRandomColor();
    }
  } */
}

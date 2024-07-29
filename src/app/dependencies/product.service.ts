import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getNames(): string[] {
    return ['Angular', 'React', 'MongoDB', 'Python', 'TypeScript']
  }
}

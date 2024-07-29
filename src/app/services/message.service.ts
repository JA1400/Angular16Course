import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  msg(): string{
    return 'this is the greeting message'
  }
}

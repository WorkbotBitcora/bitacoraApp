import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  userTypeChanged = new EventEmitter<string>();

  setUserType(type: string) {
    this.userTypeChanged.emit(type);
  }
}


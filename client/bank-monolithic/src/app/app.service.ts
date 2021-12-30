import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  setItemToLocal(data: any, pathLocalStorage: any): void {
    localStorage.setItem(pathLocalStorage, JSON.stringify(data) as any);
  }

  getItemLocal(pathLocalStorage: any): any {
    return JSON.parse(localStorage.getItem(pathLocalStorage) as any);
  }

  removeItemLocal(pathLocalStorage: any): void {
    JSON.parse(localStorage.removeItem(pathLocalStorage) as any);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageKeys } from '../shared/constants/constants';

@Injectable({
  providedIn: 'any',
})
export class SingletonService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  public data$ = this.dataSubject.asObservable();
  private storageKey = LocalStorageKeys.APP_DATA;

  constructor() {
    // Retrieve data from Local Storage on service initialization
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      this.dataSubject.next(JSON.parse(storedData));
    }
  }

  /**
   * Sets data
   * 
   * @param data data
   */
  public setData(data: any) {
    // Retrieve existing data
    const currentData = this.dataSubject.value;
    // Check if currentData is an array
    const updatedData = Array.isArray(currentData) ? [...currentData, data] : [data];
    // Save the updated data to Local Storage
    localStorage.setItem(this.storageKey, JSON.stringify(updatedData));
    // Update the BehaviorSubject
    this.dataSubject.next(updatedData);
  }

  /**
   * Gets data
   * 
   * @returns data 
   */
  public getData() {
    return this.data$;
  }
}

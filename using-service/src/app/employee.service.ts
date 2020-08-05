import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Deepak", "age": 25},
      {"id": 2, "name": "Vikash", "age": 22},
      {"id": 3, "name": "Gaurav", "age": 30},
      {"id": 4, "name": "Abhinav", "age": 26},
    ]
  }
}

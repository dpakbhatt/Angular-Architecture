import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  template: `
  <h2>Employee details</h2>
  <h3>{{errorMessage}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employees=[];
  public errorMessage;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMessage = error);
  }

}

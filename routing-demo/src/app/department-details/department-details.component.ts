import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>
      You selected the department with id = {{departmentID}}
    </h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    
    <router-outlet></router-outlet>
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    
    <div>
      <button (click)="goToDepartment()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentID;  

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get("id"));
    //this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.departmentID = id;
    }
    );
  }

  goPrevious(){
    let previousID = this.departmentID - 1;
    this.router.navigate(['/departments', previousID]);
  }

  goNext(){
    let nextID = this.departmentID + 1;
    this.router.navigate(['/departments', nextID]);
  }

  goToDepartment(){
    let selectedID = this.departmentID ? this.departmentID : null;
    //this.router.navigate(['/departments', {id: selectedID, test: "testValue"}]);
    this.router.navigate(['../', {id: selectedID}], {relativeTo: this.route});
  }

  showOverview(){
    return this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    return this.router.navigate(['contact'], {relativeTo: this.route});
  }

}

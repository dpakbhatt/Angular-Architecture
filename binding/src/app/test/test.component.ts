import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: 'app-test',
  template: `
  <!--
  <h2 class="text-success">Welcome {{name}}</h2>
  <h2 [class]="className">{{2+2}}</h2>
  <h2 class="text-special" [class]="className">{{"Welcome " + name}}</h2>
  <h2 [class.text-danger] = "hasError">{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input [id] = "myid" type="text" value="Deepak">
  <input bind-id = "myid" type="text" value="Deepak">
  <h2 [ngClass]="messageClasses">{{name}}</h2>
  <h2 [style.color]="'orange'">Style Binding</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding 2</h2>
  <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  <button (click) = "onlick($event)">Greet</button>
  <button (click) = "greeting='Welcome Deepak'">Greet</button>
  {{greeting}}
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  {{myInput.value}}
  -->
  <input [(ngModel)]="name1" type="text">
  {{name1}}
  `,
  styles: [
    `.text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
    `]
})
export class TestComponent implements OnInit {
  public myid = "testId";
  public name = "Deepak";
  public siteUrl = window.location.href;
  public className = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public greeting = "";
  public name1 = "";

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial,
  }

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onlick(event) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }
}

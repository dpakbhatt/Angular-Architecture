import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!--
  <h2 *ngIf="displayName; else elseBlock">
    Deepak
  </h2>
  <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2>
  </ng-template>

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>
      Deepak
    </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>
      Name is Hidden
    </h2>
  </ng-template>
  
  <div [ngSwitch]="colorName">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick Again</div>
  </div>
  
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}} {{color}}</h2>
  </div><br />
  <div *ngFor="let color of colors; first as f">
    <h2>{{f}} {{color}}</h2>
  </div><br />
  <div *ngFor="let color of colors; last as l">
    <h2>{{l}} {{color}}</h2>
  </div><br />
  <div *ngFor="let color of colors; even as e">
    <h2>{{e}} {{color}}</h2>
  </div><br />
  <div *ngFor="let color of colors; odd as o">
    <h2>{{o}} {{color}}</h2>
  </div>
  -->

  <h2>{{"Hello "+ name}}</h2>
  <button (click)="outputEvent()">Fire</button>

  `,
  styles: []
})
export class TestComponent implements OnInit {
  public displayName = true;
  public colorName = "black";
  public colors = ["red", "green", "blue", "black"];

  /*
  @Input() public parentData; 
  */
  @Input("parentData") public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  outputEvent() {
    this.childEvent.emit("Hi Deepak");
  }

}

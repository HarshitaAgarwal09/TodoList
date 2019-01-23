import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  tasks;
  constructor(private ts:TaskService){

  }
  getTasks(){
  	this.ts.gettasks()
  }
}
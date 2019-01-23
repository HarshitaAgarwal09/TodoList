import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TODO';
   task = {
    name :"",
    id :0,
    strike:false
  };
  tasks = [];
  constructor(private ts:TaskService){
  }

  ngOnInit(){
    this.getTasks();
  }

  onClick(){
    this.ts.addTask(this.task);
    this.task={
      name:"",
      id:0,
      strike:false
    };
  }

  editTask(task){
    this.task = task;
  }

  getTasks(){
  	this.tasks = this.ts.getTasks();
  }

  deleteTask(task){
  this.ts.deleteTask(task);   
  }
  strikeTask(task){
  this.tasks = this.ts.strikeTask(task);
  }
}
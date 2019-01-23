import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	tasks= [
	] ;

  constructor() { }

  getTasks(){
  	return this.tasks;
  }

  addTask(task){
  	if(task.id == 0 && task.name!="") {
  	  	this.tasks.push({id:(new Date()).getTime(),name:task.name,strike:false});
  	}
  	else {
  	  	this.editTask(task);
  	}
  	  
  }

  editTask(task){
  	for( var i = 0; i< this.tasks.length ; i++){
	  		if(task.id == this.tasks[i].id){
	  			this.tasks[i] = task;
	  			break;
	  		}
	  	}
  }

  deleteTask(task){
  	for( var i = 0; i< this.tasks.length ; i++){
	  	if(task.id == this.tasks[i].id){
	  		this.tasks.splice(i, 1);
	  		break;
	  	}
	}
  }

  strikeTask(task){
  	for( var i = 0; i< this.tasks.length ; i++){
	  	if(task.id == this.tasks[i].id){
	  		if(this.tasks[i].strike){
	 				this.tasks[i].strike=false;
	 			}
	 			else{
	 				this.tasks[i].strike=true;
	 			}
	 			break;
		}
	}
	return this.tasks;
  }
}
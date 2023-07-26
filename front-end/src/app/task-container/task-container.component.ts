import { Component } from '@angular/core';
import {Task} from "../dto/task";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent {

  taskList: Array<Task> = [];
  modalInput: string = "";
  task : Task = null!;

  constructor(private http:HttpClient) {
    http.get<Array<Task>>('http://localhost:8080/app/api/v1/task')
      .subscribe(taskList => this.taskList = taskList );

  }

  saveTask(txt: HTMLInputElement) {
    if (!txt.value.trim()) {
      txt.select();
      return;
    }
    this.http.post<Task>('http://localhost:8080/app/api/v1/task',
      new Task(0,txt.value,"NOT_COMPLETED")).subscribe(task =>{
      this.taskList.push(task);
      txt.value='';
      txt.focus();
    });
  }

  deleteTask(task: Task) {
    this.http.delete(`http://localhost:8080/app/api/v1/task/${task.id}`)
      .subscribe(data => {
        const index : number = this.taskList.indexOf(task);
        this.taskList.splice(index, 1);
      })

  }

  editTask(task: Task) {
    const modelDiv = document.getElementById('myModal')!;
    modelDiv.style.display = 'block';
    this.modalInput = task.description;
    this.task = task;

  }

  updateTask(txtUpdate: HTMLInputElement) {
    this.http.patch(`http://localhost:8080/app/api/v1/task/${this.task.id}`,txtUpdate.value.trim()).subscribe(data =>{
      this.task.description = txtUpdate.value.trim();
    })
  }
}

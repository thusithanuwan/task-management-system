import { Component } from '@angular/core';
import {Task} from "../dto/task";
import {HttpClient} from "@angular/common/http";
import { faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {environment} from "../../environments/environment.development";

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
    http.get<Array<Task>>(`${environment.API_BASE_URL}`)
      .subscribe(taskList => this.taskList = taskList );

  }

  saveTask(txt: HTMLInputElement) {
    if (!txt.value.trim()) {
      txt.select();
      return;
    }
    this.http.post<Task>(`${environment.API_BASE_URL}`,
      new Task(0,txt.value,"NOT_COMPLETED")).subscribe(task =>{
      this.taskList.push(task);
      txt.value='';
      txt.focus();
    });
  }

  deleteTask(task: Task) {
    this.http.delete(`${environment.API_BASE_URL}/${task.id}`)
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
    const newTask = new Task(this.task.id,txtUpdate.value.trim(),this.task.status);
    this.http.patch(`${environment.API_BASE_URL}/${this.task.id}`,newTask).subscribe(data =>{
      this.task.description = txtUpdate.value.trim();
      const modelDiv = document.getElementById('myModal')!;
      modelDiv.style.display = 'none';
    })
  }

  closeModel(txtUpdate: HTMLInputElement) {
    const modelDiv = document.getElementById('myModal')!;
    modelDiv.style.display = 'none';
    txtUpdate.value = this.task.description;

  }

  updateStatus(task: Task) {
    console.log(task.id);
    const newTask = new Task(task.id,task.description,"COMPLETED");
    this.http.patch(`${environment.API_BASE_URL}/${task.id}`,newTask).subscribe(data =>{
      this.task = task;
    });
  }

  protected readonly faTrash = faTrash;
  protected readonly faEdit = faEdit;
  protected readonly faPlus = faPlus;
}

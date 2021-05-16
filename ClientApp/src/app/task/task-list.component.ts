import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../models/staff';
import { DataService } from '../data-service/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  public tasks: any;
  cols: any;

  constructor(private dataService: DataService, private ref: DynamicDialogRef, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.dataService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
    this.cols = [
      { field: 'id', header: 'Staff Id' },
      { field: 'taskName', header: 'Task Name' },
      { field: 'hours', header: 'Task Hours' }
    ];
  }

  closeComponent() {
    this.ref.close();
  }
}


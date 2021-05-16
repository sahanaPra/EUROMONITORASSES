import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../models/staff';
import { DataService } from '../data-service/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
})
export class StaffListComponent {
  public staff: any;
  cols: any;

  constructor(private dataService: DataService, private ref: DynamicDialogRef, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.dataService.getStaff().subscribe((data: any) => {
      this.staff = data;
    });
    this.cols = [
      { field: 'id', header: 'Staff Id' },
      { field: 'staffName', header: 'Staff Name' },
      { field: 'availableHours', header: 'Available Hours' },
      { field: 'addTask', header: 'addTask' }
    ];
  }

  closeComponent() {
    this.ref.close();
  }

  addTask(data: Staff) {
    this.ref.close();
    this.dialogService.open(AddTaskComponent, {
      data: data
    });
  }
}


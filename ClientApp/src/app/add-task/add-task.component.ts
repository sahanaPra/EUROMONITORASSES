import { Component, Inject } from '@angular/core';
import { Staff } from '../models/staff';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from '../models/task';
import { DataService } from '../data-service/data.service';
import { StaffTaskMapping } from '../models/staff-task-mapping';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  staffDetails: Staff;
  tasks: Task[];
  selectedTask: any;
  linkSuccess = false;
  msgs: any[] = [];

  constructor(private config: DynamicDialogConfig, private dataService: DataService,
    private ref: DynamicDialogRef) {
    this.staffDetails = this.config.data;
  }

  ngOnInit() {
    this.dataService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    })
  }

  linkTask() {
    var link: StaffTaskMapping = { StaffId: this.staffDetails.id, TaskId: this.selectedTask.id };
    this.dataService.linkTaskToStaff(link).subscribe(() => {
      this.msgs.push({ severity: 'success', summary: 'Linked successfulyy', detail: 'Task linked to staff member' });

    })
  }

  close() {
    this.ref.close();
  }
}
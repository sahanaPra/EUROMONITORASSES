import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { StaffListComponent } from '../staff/staff-list.component';
import { TaskListComponent } from '../task/task-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DialogService]
})
export class HomeComponent {

  constructor(private dialogService: DialogService) {

  }
  openStaffComponent() {
    this.dialogService.open(StaffListComponent, {
      baseZIndex: 1002,
      closable: false,
    });
  }

  openTaskComponent() {
    this.dialogService.open(TaskListComponent, {
      baseZIndex: 1002,
      closable: false,
    });
  }

}

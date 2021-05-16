import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { StaffListComponent } from './staff/staff-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TaskListComponent } from './task/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddTaskComponent,
    StaffListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: AddTaskComponent },
    ])
  ],
  entryComponents: [StaffListComponent, TaskListComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

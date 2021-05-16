import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StaffTaskMapping } from "../models/staff-task-mapping";
import { ConfigurationService } from "./configuration.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  taskSchedulerBaseUel: any;
  writeApiBaseUrl: any;

  constructor(private httpClient: HttpClient, private configurationService: ConfigurationService) {
    this.taskSchedulerBaseUel = this.configurationService.configuration.clients.taskSchedulerUrl;
  }

  //#region Staff
  getStaff<T>(): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    };
    const url = this.taskSchedulerBaseUel + "staff";
    return this.httpClient.get<T>(url, httpOptions);
  }
  //#endregion

  //#region Task
  getTasks<T>(): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    };
    const url = this.taskSchedulerBaseUel + "task";
    return this.httpClient.get<T>(url, httpOptions);
  }

  linkTaskToStaff<T>(link: StaffTaskMapping): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    const url = this.taskSchedulerBaseUel + "task";
    return this.httpClient.post<T>(url, link, httpOptions);
  }

  //#endregion
}

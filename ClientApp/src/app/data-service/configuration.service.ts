import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../models/configuration.model';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    configuration: Configuration;

    constructor(
        private http: HttpClient) { }

    setConfiguration(): Promise<Configuration> {
        return new Promise((resolve, reject) => {
            const path = environment.configurationPath;
            this.http.get(path).toPromise().then((response: any) => {
                this.configuration = response.environment;
                return resolve(this.configuration);
            }).then(() => resolve(null))
                .catch(() => reject());
        });
    }
}

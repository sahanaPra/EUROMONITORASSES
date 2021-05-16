import { Component } from '@angular/core';
import { ConfigurationService } from './data-service/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private configurationService: ConfigurationService) {
    this.configurationService.setConfiguration();
  }
}

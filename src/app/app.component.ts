import { Component } from '@angular/core';
import { NotificationService } from './common-app/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';

  constructor(notify: NotificationService) {
    notify.add('Demo de notificacion.');
    notify.remove(0);
    notify.remove(0);
  }
}

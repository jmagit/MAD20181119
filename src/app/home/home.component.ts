import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-app/notification.service';
import { LoggerService } from 'src/indra-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola mundo';

  constructor(notify: NotificationService, out: LoggerService) {
    // notify.add('Demo de notificacion.');
    // notify.remove(0);
    // notify.remove(0);
    // out.error('Esto es un error');
    // out.warn('Esto es un warn');
    // out.info('Esto es un info');
    // out.log('Esto es un log');
  }
  ngOnInit(): void {

  }


}

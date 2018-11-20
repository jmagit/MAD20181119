import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';

export enum NotificationType {
  error,
  warn,
  log
}

export class NotificationModel {
  constructor(private id: number, private message: string,
    private type: NotificationType = NotificationType.error) {}

  public get Id() { return this.id; }
  public set Id(valor: number) { this.id = valor; }
  public get Message() { return this.message; }
  public set Message(valor: string) { this.message = valor; }
  public get Type(): NotificationType { return this.type; }
  public set Type(valor: NotificationType) { this.type = valor; }
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<NotificationModel> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }
  public get HayNotificaciones() { return this.listado.length > 0; }

  public add(msg: string, tipo: NotificationType = NotificationType.error): void {
    if (msg) {
      const id = this.listado.length ? this.listado[this.listado.length].Id + 1 : 1;
      this.listado.push(new NotificationModel(id, msg, tipo));
      if (tipo === NotificationType.error) {
        this.out.error(msg);
      }
    } else {
      this.out.error('Falta el mensaje de notificación.');
    }
  }
  public remove(index: number): void {
    if (0 <= index && index < this.listado.length) {
      this.listado.splice(index, 1);
    } else {
      this.out.error('Index out of range.');
    }
  }
  public clear() {
    if (this.listado.length) {
      this.listado.splice(0);
    }
  }
}

import { Injectable } from '@angular/core';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private Log = new Log('' , '')

  constructor() { }
  setLog(logType: string, message: string) {
    
         this.Log.logType = logType;
          this.Log.message = message;
  }
  getLog() {
    return this.Log;
}
}

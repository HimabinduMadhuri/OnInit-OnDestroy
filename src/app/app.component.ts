import { Component, OnInit } from '@angular/core';
import { Log } from './log';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cp1log: Log;
  showCP1 = true;
   showCounter = true;
   constructor(private loggerService: LoggerService) {}
  ngOnInit(){
    this.cp1log = this.loggerService.getLog();
    
  }
  onToggleCP1() {
    this.showCP1 = (this.showCP1 === true)? false : true;
  }
  onToggleCounter() {
    this.showCounter = (this.showCounter === true)? false : true;
  }  
}

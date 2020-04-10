import { LoggerService } from './../logger.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css']
})
export class Cp1Component implements OnInit , OnDestroy {
 
  

  constructor(public loggerService:LoggerService) { }
  

  ngOnInit(): void {
    this.loggerService.setLog('c', 'Component created');
  }
  
  ngOnDestroy() {
    this.loggerService.setLog('r', 'Component destroyed');

  }
  
  }   



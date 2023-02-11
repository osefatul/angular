import { EmployeeComponent } from './../employee/employee.component';
import { Component, ElementRef, ViewChild, OnInit, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})


export class ContainerComponent implements  AfterContentInit {
  @ContentChild(EmployeeComponent) employee !: EmployeeComponent
  
  ngAfterContentInit(): void {
    console.log(this.employee)
    this.employee.empName = "Mike";
  }
}

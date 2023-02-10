import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  headerTitle:string = ""
  
  ngOnInit(): void {
    this.headerTitle ="Welcome to Our Hotel"
    console.log("loading header...", this.headerTitle);
  }

}
import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef, OnInit, ViewChildren, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import {localStorageToken} from "./localStorage.token"
import { InitService } from './services/init.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'hotelInventory';

  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('date', {static: true}) date!: ElementRef;

  // @ViewChildren()

  constructor(@Inject (localStorageToken) private localStorage: any,
  private initService: InitService
  ){
    console.log("APP_INITIALIZER CONFIG:", initService.config)
  }

  ngOnInit() {
    this.date.nativeElement.innerText = "Choose booking dates"
    this.localStorage.setItem('name', "Hilton Hotel")
  }

  ngAfterViewInit(){
    console.log("rendering rooms")
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName: string = "Hilton hotel"
  numberOfRooms: number = 50

  hideRooms:boolean = false;

  toggle(){
    this.hideRooms = !this.hideRooms; //toggle the value
  }
}

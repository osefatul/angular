import { RoomsService } from './../rooms/services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { HotelList } from '../rooms/rooms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})


export class HotelsComponent implements OnInit {

  hotelsList: HotelList[] = [];
  hotelTitle: string = "";
  constructor(private RoomsService: RoomsService){}

  ngOnInit () {
    // console.log(this.roomsService.getHotels())
    this.RoomsService.getHotels().subscribe(hotels => {
      // console.log(hotels)
      this.hotelsList = hotels;
    })
    this.hotelTitle = "Hotels List";

  }

}

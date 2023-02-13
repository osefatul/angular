import { RoomsService } from '../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { HotelList } from '../../interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})


export class HotelsComponent implements OnInit {

  constructor(private RoomsService: RoomsService){}

  hotelsList: HotelList[] = [];
  hotelTitle: string = "";

  stream = new Observable(hotel=>{
    hotel.next("hotel1");
    hotel.next("hotel2");
    hotel.next("hotel3");
    hotel.complete();
  })

  ngOnInit () {
    this.RoomsService.getHotels().subscribe(hotels => {
      // console.log(hotels)
      this.hotelsList = hotels;
    })
    this.hotelTitle = "Hotels List";
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: ()=> console.log("complete"),
      error: (err) => console.log(err)
    })
  }
}

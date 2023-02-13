import { HotelsService } from './../services/hotels.service';
import { RoomsService } from '../services/rooms.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelList } from '../../interface';
import { Observable, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})


export class HotelsComponent implements OnInit, OnDestroy  {

  constructor(private HotelsService: HotelsService){}

  hotelsList: HotelList[] = [];
  hotelTitle: string = "";
  totalBytes: number = 0;
  subscription !: Subscription // for subscription data stream.
  hotels$ = this.HotelsService.getHotels(); //using async pipe

  //observable example
  stream = new Observable(hotel=>{
    hotel.next("hotel1");
    hotel.next("hotel2");
    hotel.next("hotel3");
    hotel.complete();
  })


  ngOnInit () {
    this.hotelTitle = "Hotels List";

    //subscribing to example of stream.
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: ()=> console.log("complete"),
      error: (err) => console.log(err)
    })


    //manually subscribe to data stream
    // this.subscription = this.RoomsService.getHotels().subscribe(hotels => {
    //   this.hotelsList = hotels;
    // })


    //Using HttpRequest method to fetch data...
    this.HotelsService.getHotelsLoaded().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Request has been sent")
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("request success")
          break
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body)
        }
      }
    })
  }



  ngOnDestroy() {
    //unsubscribing to data stream as we leave.
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



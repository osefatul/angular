import { HotelsService } from './../services/hotels.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelList } from '../../interface';
import { catchError, Observable, of, Subject, Subscription, map } from 'rxjs';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';

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

  // for catch and error.
  error$  = new Subject<string>(); 
  getError$ = this.error$.asObservable(); 
  
   //using fetch data from hotelService and then async pipe to render data.
  hotels$ = this.HotelsService.getHotels().pipe(
    catchError( error => {
      this.error$.next(error.message);
      return of ([])
    })
  )

  //usage of map
  lengthOfHotels$ = this.HotelsService.getHotels().pipe(
    map(hotels => hotels.length)
  )

  ngOnInit () {
    this.hotelTitle = "Hotels List";
    this.lengthOfHotels$.subscribe(x=> console.log(x)) //check this:

    //manually subscribe to data stream
    // this.subscription = this.HotelsService.getHotels().subscribe(hotels => {
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



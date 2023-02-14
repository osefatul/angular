import { HttpClient, HttpRequest } from '@angular/common/http';
import { AppConfig } from '../AppConfig/app.config.interface';
import { APP_SERVICE_CONFIG } from '../AppConfig/app.config.service';
import { Inject, Injectable } from '@angular/core';
import { HotelList, RoomList } from '../../interface';
import { shareReplay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HotelsService {

    constructor(
        @Inject (APP_SERVICE_CONFIG) private config:AppConfig,
        private http: HttpClient) 
        {
        console.log(this.config.apiEndpoint)
        console.log("room service initialized...")
    }

    // -------------- Fetching API ------
    getHotels (){
    // return this.http.get<HotelList[]>("/v1/hotels")
    return this.http.get<HotelList[]>("/v1/hotels").pipe(shareReplay(1)) // to cache response after multiple requests.
    }

    getHotelsLoaded (){
    const request = new HttpRequest (
        "GET",
        "/v1/hotels",
        {
        reportProgress: true,
        }
    );
    return this.http.request(request);
    }

}
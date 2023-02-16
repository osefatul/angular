import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
  }

  // id!: number;
  
  // id$ = this.router.params.pipe(map( params => params["roomId"]));
  id$ = this.router.paramMap.pipe(map( params => params.get("roomId")));


  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   this.id = params['roomId'];
    // })
  }


}

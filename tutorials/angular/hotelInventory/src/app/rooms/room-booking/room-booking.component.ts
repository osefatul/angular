import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
  }

  id!: number;

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['roomId'];
    })
  }

  clickHere () {
    this.id = +this.id + 1;
  }


  onClick (): number {
    return +this.id * 3 * this.id
  }


  

}

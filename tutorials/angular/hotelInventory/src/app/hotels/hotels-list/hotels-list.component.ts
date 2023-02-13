import { Component, Input } from '@angular/core';
import { HotelList } from 'src/interface';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent {

  @Input () hotels: HotelList [] | null =[]

}

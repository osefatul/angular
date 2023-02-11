import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef, OnInit, ViewChildren } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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

  ngOnInit() {
    this.date.nativeElement.innerText = "Choose booking dates"
  }

  ngAfterViewInit(){
    console.log("rendering rooms")
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
}


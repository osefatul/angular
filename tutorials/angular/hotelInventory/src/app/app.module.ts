import { InitService } from './services/init.service';
import { APP_SERVICE_CONFIG, APP_CONFIG } from './AppConfig/app.config.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoPickerComponent } from './demo-picker/demo-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { RequestInterceptor } from './request.interceptor';




function initFactory (initService: InitService){
  return () => initService.init();
}



@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    DemoPickerComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    HotelsComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService], //dependencies
    multi: true
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { InitService } from './services/init.service';
import { APP_SERVICE_CONFIG, APP_CONFIG } from './AppConfig/app.config.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoPickerComponent } from './demo-picker/demo-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { RequestInterceptor } from './request.interceptor';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';





function initFactory (initService: InitService){
  return () => initService.init();
}



@NgModule({
  declarations: [
    AppComponent,
    DemoPickerComponent,
    ContainerComponent,
    EmployeeComponent,
    HotelsComponent,
    HotelsListComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    RoomsModule,
    HeaderModule

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

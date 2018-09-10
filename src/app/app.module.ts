import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms'
import { RestaurantOrderService } from './restaurant.order.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

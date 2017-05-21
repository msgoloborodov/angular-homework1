import { Component } from '@angular/core';
import { hotels$ } from './data/hotels';
import { hotelTypes$ } from './data/hotel-types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  public copyright: string = `<p>© 2015 Hot Weather Widget.
All rights reserved | Design by <a href="http://w3layouts.com/" target="_blank">  W3layouts </a></p>`;

  public hotels$: Observable<Hotel[]> = hotels$;
  public hotelTypes$: Observable<HotelType[]> = hotelTypes$;

  public selectedHotel: Hotel;
  public selectedHotelType: HotelType;

  public onHotelSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
  }

  public onHotelTypeChange(hotelType: HotelType): void {
    this.selectedHotelType = hotelType;
  }
}

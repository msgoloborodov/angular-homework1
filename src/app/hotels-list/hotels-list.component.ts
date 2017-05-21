import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'widget-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  @Input()
  public hotels: Hotel[];

  @Input('hotel-types')
  public hotelTypes: HotelType[];

  @Output()
  public onHotelSelect: EventEmitter<Hotel> = new EventEmitter();

  @Output()
  public onHotelTypeChange: EventEmitter<HotelType> = new EventEmitter();

  public selectedHotel: Hotel;
  public selectedHotelType: HotelType;

  public constructor() { }

  public ngOnInit(): void {
    if (this.hotelTypes && this.hotelTypes[0]) {
      this.selectHotelType(this.hotelTypes[0]);
    }

    if (this.hotels && this.hotels[0]) {
      this.selectHotel(this.hotels[0]);
    }
  }

  public selectHotel(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.onHotelSelect.emit(hotel);
  }

  public selectHotelType(hotelType: HotelType): void {
    this.selectedHotelType = hotelType;
    this.onHotelTypeChange.emit(hotelType);
  }
}

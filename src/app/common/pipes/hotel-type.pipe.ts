import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelType'
})
export class HotelTypePipe implements PipeTransform {

  public transform(hotels: Hotel[], hotelType: HotelType): Hotel[] {
    if (!hotelType) {
      return hotels;
    }
    return hotels
      .filter((hotel: Hotel) => hotel.hotelType.id === hotelType.id);
  }

}

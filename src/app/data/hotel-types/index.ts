import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const HOTEL_TYPES: HotelType[] = [
  {
    id: 1,
    name: 'Hotel'
  },
  {
    id: 2,
    name: 'Fishing'
  },
  {
    id: 3,
    name: 'Tours'
  },
  {
    id: 4,
    name: 'Weather'
  },

];


export const hotelTypes$: Observable<HotelType[]> = Observable.of(HOTEL_TYPES);

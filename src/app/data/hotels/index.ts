import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const HOTELS: Hotel[] = [
  {
    id: 1,
    name: 'Resort Address1',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    images: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 24,
      waterTemperature: 14
    },
    social: {
      followers: 567,
      following: 187
    },
    hotelType: {
      id: 1,
      name: 'Hotel'
    }
  },
  {
    id: 2,
    name: 'Resort Address2',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    images: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 22,
      waterTemperature: 10
    },
    social: {
      followers: 894,
      following: 123
    },
    hotelType: {
      id: 1,
      name: 'Hotel'
    }
  },
  {
    id: 3,
    name: 'Resort Address3',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    images: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 12,
      waterTemperature: 12
    },
    social: {
      followers: 144,
      following: 12
    },
    hotelType: {
      id: 1,
      name: 'Hotel'
    }
  },
  {
    id: 4,
    name: 'Resort Address4',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    images: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 34,
      waterTemperature: 18
    },
    social: {
      followers: 5578,
      following: 708
    },
    hotelType: {
      id: 2,
      name: 'Fishing'
    }
  },
  {
    id: 5,
    name: 'Resort Address5',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    images: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 5,
      waterTemperature: 4
    },
    social: {
      followers: 1,
      following: 1
    },
    hotelType: {
      id: 3,
      name: 'Tours'
    }
  }
];

export const hotels$: Observable<Hotel[]> = Observable.of(HOTELS);

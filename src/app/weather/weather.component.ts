import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input('air-temperature')
  public airTemperature: number;

  @Input('water-temperature')
  public waterTemperature: number;

  public constructor() { }

  public ngOnInit(): void { }

}

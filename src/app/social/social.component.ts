import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input()
  public followers: number;

  @Input()
  public following: number;

  public constructor() { }

  public ngOnInit(): void {  }

}

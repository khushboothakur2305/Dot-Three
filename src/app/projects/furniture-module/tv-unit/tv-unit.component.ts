import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-unit',
  templateUrl: './tv-unit.component.html',
  styleUrls: ['./tv-unit.component.scss']
})
export class TvUnitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/tv unit/tv1.jpg',
      thumbImage: 'assets/Images/tv unit/tv1.jpg',
    },
    {
      image: 'assets/Images/tv unit/tv2.jpg',
      thumbImage: 'assets/Images/tv unit/tv2.jpg',
    },
  ]
}

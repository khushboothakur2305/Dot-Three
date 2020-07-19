import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bunglow',
  templateUrl: './bunglow.component.html',
  styleUrls: ['./bunglow.component.scss']
})
export class BunglowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/bungalow/b1.jpg',
      thumbImage: 'assets/Images/bungalow/b1.jpg',
    },
    {
      image: 'assets/Images/bungalow/b2.jpg',
      thumbImage: 'assets/Images/bungalow/b2.jpg',
    },
  ]

}

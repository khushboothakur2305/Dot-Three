import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: '/assets/Images/cafe/c1.jpg',
      thumbImage: '/assets/Images/cafe/c1.jpg',
    },
    {
      image: '/assets/Images/cafe/c2.jpg',
      thumbImage: '/assets/Images/cafe/c2.jpg',
    },
    {
      image: '/assets/Images/cafe/c3.jpg',
      thumbImage: '/assets/Images/cafe/c3.jpg',
    },
    {
      image: '/assets/Images/cafe/c4.jpg',
      thumbImage: '/assets/Images/cafe/c4.jpg',
    },
    {
      image: '/assets/Images/cafe/c5.jpg',
      thumbImage: '/assets/Images/cafe/c5.jpg',
    },
    {
      image: '/assets/Images/cafe/c6.jpg',
      thumbImage: '/assets/Images/cafe/c6.jpg',
    },
  ]
}

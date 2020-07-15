import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/interior/bar/bar1.jpg',
      thumbImage: 'assets/Images/interior/bar/bar1.jpg',
    },
    {
      image: 'assets/Images/interior/bedroom/bedroom1.jpg',
      thumbImage: 'assets/Images/interior/bedroom/bedroom1.jpg',
    },
    {
      image: 'assets/Images/interior/desk/d1.jpg',
      thumbImage: 'assets/Images/interior/desk/d1.jpg',
    },
    {
      image: 'assets/Images/interior/desk 2/desk1.jpg',
      thumbImage: 'assets/Images/interior/desk 2/desk1.jpg',
    },

    {
      image: 'assets/Images/interior/kitchen/k1.jpg',
      thumbImage: 'assets/Images/interior/kitchen/k1.jpg',
    },
    {
      image: 'assets/Images/interior/showroom/sh3.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh3.jpg',
    },

    {
      image: 'assets/Images/interior/bar/bar3.jpg',
      thumbImage: 'assets/Images/interior/bar/bar3.jpg',
    },
    {
      image: 'assets/Images/interior/showroom/sh5.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh5.jpg',
    },
  ]
}

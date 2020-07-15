import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architectural',
  templateUrl: './architectural.component.html',
  styleUrls: ['./architectural.component.scss']
})
export class ArchitecturalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/apartment/Ap1.jpg',
      thumbImage: 'assets/Images/apartment/Ap1.jpg',
    },
    {
      image: 'assets/Images/bungalow/b1.jpg',
      thumbImage: 'assets/Images/bungalow/b1.jpg',
    },
    {
      image: 'assets/Images/cafe/c1.jpg',
      thumbImage: 'assets/Images/cafe/c1.jpg',
    },
    {
      image: 'assets/Images/cafe/c6.jpg',
      thumbImage: 'assets/Images/cafe/c6.jpg',
    },

    {
      image: 'assets/Images/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/apartment/Ap2.jpg',
    },
    {
      image: 'assets/Images/bungalow/b2.jpg',
      thumbImage: 'assets/Images/bungalow/b2.jpg',
    },
    {
      image: 'assets/Images/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/apartment/Ap2.jpg',
    },
    {
      image: 'assets/Images/cafe/c4.jpg',
      thumbImage: 'assets/Images/cafe/c4.jpg',
    },
  ]
}

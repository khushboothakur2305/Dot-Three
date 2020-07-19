import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/apartment/Ap1.jpg',
      thumbImage: 'assets/Images/apartment/Ap1.jpg',
    },
    {
      image: 'assets/Images/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/apartment/Ap2.jpg',
    },
  ]
}

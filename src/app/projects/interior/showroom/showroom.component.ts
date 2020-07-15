import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/showroom/s1.jpg',
      thumbImage: 'assets/Images/showroom/s1.jpg',
    },
    {
      image: 'assets/Images/showroom/s2.jpg',
      thumbImage: 'assets/Images/showroom/s2.jpg',
    },
    {
      image: 'assets/Images/showroom/s3.jpg',
      thumbImage: 'assets/Images/showroom/s3.jpg',
    },
    {
      image: 'assets/Images/showroom/s4.jpg',
      thumbImage: 'assets/Images/showroom/s4.jpg',
    },
    {
      image: 'assets/Images/showroom/s5.jpg',
      thumbImage: 'assets/Images/showroom/s5.jpg',
    },
  ]
}

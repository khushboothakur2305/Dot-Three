import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture-module',
  templateUrl: './furniture-module.component.html',
  styleUrls: ['./furniture-module.component.scss']
})
export class FurnitureModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/storage units/stu3.jpg',
      thumbImage: 'assets/Images/storage units/stu3.jpg',
    },
    {
      image: 'assets/Images/sofa set/sofa.jpg',
      thumbImage: 'assets/Images/sofa set/sofa.jpg',
    },
    {
      image: 'assets/Images/storage units/stu1.jpg',
      thumbImage: 'assets/Images/storage units/stu1.jpg',
    },
    {
      image: 'assets/Images/wall hung sofa/ws2.jpg',
      thumbImage: 'assets/Images/wall hung sofa/ws2.jpg',
    },

    {
      image: 'assets/Images/tv unit/tv1.jpg',
      thumbImage: 'assets/Images/tv unit/tv1.jpg',
    },
    {
      image: 'assets/Images/storage units/stu4.jpg',
      thumbImage: 'assets/Images/storage units/stu4.jpg',
    },
    {
      image: 'assets/Images/wall hung sofa/ws1.jpg',
      thumbImage: 'assets/Images/wall hung sofa/ws1.jpg',
    },
  ]
}

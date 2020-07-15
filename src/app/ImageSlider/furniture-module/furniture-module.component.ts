import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-module',
  templateUrl: './furniture-module.component.html',
  styleUrls: ['./furniture-module.component.scss']
})
export class FurnitureModuleComponent implements OnInit {

  constructor(private router:Router) { }
  index:number;
  ngOnInit(): void {}
routers=<any>[];
  submit(nav) {
// console.log(nav.imageObj);
this.routers=this.imageObject[nav.activeImageIndex]
console.log(this.routers.image);
this.router.navigate(["/"+this.routers.url]);
   }

  imageObject=[
    {
      image: 'assets/Images/storage units/stu3.jpg',
      thumbImage: 'assets/Images/storage units/stu3.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/sofa set/sofa.jpg',
      thumbImage: 'assets/Images/sofa set/sofa.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/storage units/stu1.jpg',
      thumbImage: 'assets/Images/storage units/stu1.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/wall hung sofa/ws2.jpg',
      thumbImage: 'assets/Images/wall hung sofa/ws2.jpg',
       url:'home'
    },

    {
      image: 'assets/Images/tv unit/tv1.jpg',
      thumbImage: 'assets/Images/tv unit/tv1.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/storage units/stu4.jpg',
      thumbImage: 'assets/Images/storage units/stu4.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/wall hung sofa/ws1.jpg',
      thumbImage: 'assets/Images/wall hung sofa/ws1.jpg',
       url:'home'
    },
  ]
}

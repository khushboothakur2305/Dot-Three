import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {

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
      image: 'assets/Images/interior/bar/bar1.jpg',
      thumbImage: 'assets/Images/interior/bar/bar1.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/interior/bedroom/bedroom1.jpg',
      thumbImage: 'assets/Images/interior/bedroom/bedroom1.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/interior/desk/d1.jpg',
      thumbImage: 'assets/Images/interior/desk/d1.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/interior/desk 2/desk1.jpg',
      thumbImage: 'assets/Images/interior/desk 2/desk1.jpg',
       url:'home'
    },

    {
      image: 'assets/Images/interior/kitchen/k1.jpg',
      thumbImage: 'assets/Images/interior/kitchen/k1.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/interior/showroom/sh3.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh3.jpg',
       url:'home'
    },

    {
      image: 'assets/Images/interior/bar/bar3.jpg',
      thumbImage: 'assets/Images/interior/bar/bar3.jpg',
       url:'home'
    },
    {
      image: 'assets/Images/interior/showroom/sh5.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh5.jpg',
       url:'home'
    },
  ]
}

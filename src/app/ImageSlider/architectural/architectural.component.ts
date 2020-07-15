import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-architectural',
  templateUrl: './architectural.component.html',
  styleUrls: ['./architectural.component.scss'],
})
export class ArchitecturalComponent implements OnInit {
  constructor(private router:Router) {}
index:number;
  ngOnInit(): void {}
routers=<any>[];
  submit(nav) {
// console.log(nav.imageObj);
this.routers=this.imageObject[nav.activeImageIndex]
console.log(this.routers.image);
this.router.navigate(["/"+this.routers.url]);
   }
  imageObject = [
    {
      image: 'assets/Images/apartment/Ap1.jpg',
      thumbImage: 'assets/Images/apartment/Ap1.jpg',
     url:'home'
    },
    {
      image: 'assets/Images/bungalow/b1.jpg',
      thumbImage: 'assets/Images/bungalow/b1.jpg',
     url:'home'
    },
    {
      image: 'assets/Images/cafe/c1.jpg',
      thumbImage: 'assets/Images/cafe/c1.jpg',
     url:'home'
    },
    {
      image: 'assets/Images/cafe/c6.jpg',
      thumbImage: 'assets/Images/cafe/c6.jpg',
     url:'home'
    },

    {
      image: 'assets/Images/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/apartment/Ap2.jpg',
     url:'home'
    },
    {
      image: 'assets/Images/bungalow/b2.jpg',
      thumbImage: 'assets/Images/bungalow/b2.jpg',
     url:'home'
    },
    {
      image: 'assets/Images/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/apartment/Ap2.jpg',
     url:'home'
    },
    {
      image: 'assets/Images/cafe/c4.jpg',
      thumbImage: 'assets/Images/cafe/c4.jpg',
     url:'home'
    },
  ];
}

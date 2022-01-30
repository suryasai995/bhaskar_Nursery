import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public backimage= "assets/img3.jpg";
  public cardList = [
    {
      name: "Plants Nursery", image: "assets/img2.jpg",
      content:
        "Here all type of plants are Available for home need and business needs  , 200+ of variety's plants are available "
    },
    {
      name: "Decorative Plants", image: "assets/img1.jpg",
      content:
        "We offer decorative plants that fit any style and  budget and aslo  beautify your home and office with decorative plants"
    },
    {
      name: "Land Scaping", image: "assets/img3.jpg",
      content:
        "LAND SCAPING Is Available : The soul of a landscape, the spirits of the elements, the genius of every place will be revealed to a loving view of nature"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

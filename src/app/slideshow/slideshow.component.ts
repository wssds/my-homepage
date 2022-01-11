import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['macbook.dark.jpg', 'shanghai.modern.jpg', 'robotarm.jpg', 'matrix.jpg'];
  headlines = ['Start Coding', 'modernize the world', 'bring engineering to the next level', 'enter the matrix'];
  currentImage = 0;
  showImage = true;
 
  ngOnInit() {
    this.updateImage();
  }


  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);

  }


}

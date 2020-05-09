import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-lisa',
  templateUrl: './carousel-lisa.component.html',
  styleUrls: ['./carousel-lisa.component.scss']
})
export class CarouselLisaComponent implements AfterViewInit {
  @Input() items;
  @Input() showControls = true;
  private itemWidth: number;
  currentSlide = 0;
  carouselWrapperStyle = {};

  next() {
    if (this.currentSlide + 1 === this.items.length) {
      return;
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }


  prev() {
    if (this.currentSlide === 0) {
      return;
    }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
  }

  constructor() {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth = 500;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    });

  }

}

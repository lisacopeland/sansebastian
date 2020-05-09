import { Component, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { CarouselWidthMode, CarouselComponent, CarouselConfig, CarouselAlignMode } from 'ng-carousel-cdk';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

export interface SlideInterface {
  id: string;
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;
  @ViewChild(CarouselComponent, { static: true }) carouselRef: CarouselComponent;
  itemIndex = 0;
  config: CarouselConfig = {
    widthMode: CarouselWidthMode.PERCENT,
    slideWidth: 50,
    transitionDuration: 2000,
    alignMode: CarouselAlignMode.CENTER,
    shouldLoop: true,
    autoplayEnabled: true,
    dragEnabled: true,
  items: [
    {
      id: '1',
      src: 'assets/slides/alex.jpg',
      alt: 'Alex',
      title: 'Alex'
    },
    {
      id: '2',
      src: 'assets/slides/barn.jpg',
      alt: 'Barn',
      title: 'Barn'
    },
    {
      id: '3',
      src: 'assets/slides/maggy.jpg',
      alt: 'Maggy',
      title: 'Maggy'
    },
    {
      id: '4',
      src: 'assets/slides/coveredarena.jpg',
      alt: 'Covered Arena',
      title: 'Covered Arena'
    },
    {
      id: '5',
      src: 'assets/slides/paddocks.jpg',
      alt: 'Paddocks',
      title: 'Paddocks'
    },
    {
      id: '6',
      src: 'assets/slides/stallsinbarn.jpg',
      alt: 'Stalls in barn',
      title: 'Stalls in barn'
    },
    {
      id: '7',
      src: 'assets/slides/washrack.jpg',
      alt: 'Wash rack',
      title: 'Wash rack'
    }
  ]
};

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.links$.subscribe(links => {
      console.log(links);
    });
  }

  prev(): void {
    this.carouselRef.prev();
  }

  next(): void {
    this.carouselRef.next();
  }

  goTo(index: number): void {
    this.carouselRef.setIndex(index);
  }

  setItemIndex(newIndex: number): void {
    this.itemIndex = newIndex;
  }

}

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + html + ')');
  }

}

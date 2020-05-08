import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';

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
  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    items: 1,
    margin: 20,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
/*     responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }, */
    nav: true
  };

  slides: SlideInterface[] = [
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
  ];

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.links$.subscribe(links => {
      console.log(links);
    });
  }

}

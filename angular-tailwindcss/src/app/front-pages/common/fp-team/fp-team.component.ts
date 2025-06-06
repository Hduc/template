import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-fp-team',
    imports: [CarouselModule],
    templateUrl: './fp-team.component.html',
    styleUrl: './fp-team.component.scss'
})
export class FpTeamComponent {

    // Owl Carousel
    teamSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    }

}
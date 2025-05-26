import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-client-ratings',
    imports: [CarouselModule, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './client-ratings.component.html',
    styleUrl: './client-ratings.component.scss'
})
export class ClientRatingsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    // Owl Carousel
    clientRatingsSlides: OwlOptions = {
        nav: false,
        loop: true,
        dots: true,
        margin: 25,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-line'></i>",
            "<i class='ri-arrow-right-line'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            506: {
                items: 2
            },
            668: {
                items: 2
            },
            924: {
                items: 3
            }
        }
    }

}
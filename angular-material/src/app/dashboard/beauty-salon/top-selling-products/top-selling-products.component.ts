import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-selling-products',
    imports: [CarouselModule, RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './top-selling-products.component.html',
    styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Owl Carousel
    topSellingProductsSlides: OwlOptions = {
        nav: true,
        margin: 25,
        loop: true,
        dots: false,
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
                items: 3
            },
            705: {
                items: 4
            }
        }
    }

}
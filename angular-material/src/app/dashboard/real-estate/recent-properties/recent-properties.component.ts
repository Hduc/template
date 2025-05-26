import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-recent-properties',
    imports: [MatCardModule, CarouselModule, RouterLink, MatButtonModule],
    templateUrl: './recent-properties.component.html',
    styleUrl: './recent-properties.component.scss'
})
export class RecentPropertiesComponent {

	constructor(
		public themeService: CustomizerSettingsService
	) {}

    // Owl Carousel
    recentPropertiesSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		]
    }

}
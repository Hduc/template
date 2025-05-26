import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { ReviewsComponent } from './reviews/reviews.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-hp-room-details',
    imports: [RouterLink, ReviewsComponent, MatCardModule, CarouselModule, NgFor],
    templateUrl: './hp-room-details.component.html',
    styleUrl: './hp-room-details.component.scss'
})
export class HpRoomDetailsComponent {
    
    // Product Images
    roomImages = [
        {
            url: 'images/rooms/room-details1.jpg'
        },
        {
            url: 'images/rooms/room-details2.jpg'
        },
        {
            url: 'images/rooms/room-details3.jpg'
        },
        {
            url: 'images/rooms/room-details4.jpg'
        }
    ]
    selectedImage: string = this.roomImages[0].url;
    changeImage(image: string) {
        this.selectedImage = image;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
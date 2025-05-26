import {  NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../../settings/toggle.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CoursesYouMayLikeComponent } from './courses-you-may-like/courses-you-may-like.component';

@Component({
    selector: 'app-lcd-course-details',
    imports: [RouterLink, NgIf, CoursesYouMayLikeComponent, MatTabsModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './lcd-course-details.component.html',
    styleUrl: './lcd-course-details.component.scss'
})
export class LcdCourseDetailsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

    // Course Preview Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}
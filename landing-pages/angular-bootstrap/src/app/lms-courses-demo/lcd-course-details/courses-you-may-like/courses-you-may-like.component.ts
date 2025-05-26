import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-courses-you-may-like',
    imports: [RouterLink],
    templateUrl: './courses-you-may-like.component.html',
    styleUrl: './courses-you-may-like.component.scss'
})
export class CoursesYouMayLikeComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
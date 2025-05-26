import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-courses',
    imports: [RouterLink],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss'
})
export class CoursesComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
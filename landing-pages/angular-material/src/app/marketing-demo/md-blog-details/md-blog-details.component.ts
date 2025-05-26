import { Component } from '@angular/core';
import { ToggleService } from '../../settings/toggle.service';

@Component({
    selector: 'app-md-blog-details',
    imports: [],
    templateUrl: './md-blog-details.component.html',
    styleUrl: './md-blog-details.component.scss'
})
export class MdBlogDetailsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
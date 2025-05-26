import { Component } from '@angular/core';
import { CtaComponent } from '../common/cta/cta.component';
import { ToggleService } from '../../settings/toggle.service';

@Component({
    selector: 'app-ed-blog-details',
    imports: [CtaComponent],
    templateUrl: './ed-blog-details.component.html',
    styleUrl: './ed-blog-details.component.scss'
})
export class EdBlogDetailsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '../common/cta/cta.component';
import { ToggleService } from '../../settings/toggle.service';

@Component({
    selector: 'app-ed-blog',
    imports: [RouterLink, CtaComponent],
    templateUrl: './ed-blog.component.html',
    styleUrl: './ed-blog.component.scss'
})
export class EdBlogComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
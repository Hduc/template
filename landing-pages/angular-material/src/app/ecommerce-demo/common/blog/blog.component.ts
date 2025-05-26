import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-blog',
    imports: [RouterLink, MatButtonModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
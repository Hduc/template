import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '../common/cta/cta.component';

@Component({
    selector: 'app-ed-blog',
    imports: [RouterLink, CtaComponent],
    templateUrl: './ed-blog.component.html',
    styleUrl: './ed-blog.component.scss'
})
export class EdBlogComponent {}
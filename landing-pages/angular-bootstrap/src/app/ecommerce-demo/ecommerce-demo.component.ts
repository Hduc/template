import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';
import { ToggleService } from '../settings/toggle.service';

@Component({
    selector: 'app-ecommerce-demo',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './ecommerce-demo.component.html',
    styleUrl: './ecommerce-demo.component.scss'
})
export class EcommerceDemoComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}
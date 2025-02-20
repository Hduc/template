import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FpFooterComponent } from './common/fp-footer/fp-footer.component';
import { FpNavbarComponent } from './common/fp-navbar/fp-navbar.component';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-front-pages',
    imports: [RouterOutlet, FpNavbarComponent, FpFooterComponent],
    templateUrl: './front-pages.component.html',
    styleUrl: './front-pages.component.scss'
})
export class FrontPagesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
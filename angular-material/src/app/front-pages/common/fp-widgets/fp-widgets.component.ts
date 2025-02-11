import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-widgets',
    imports: [],
    templateUrl: './fp-widgets.component.html',
    styleUrl: './fp-widgets.component.scss'
})
export class FpWidgetsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
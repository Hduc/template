import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-active-total-property',
    imports: [],
    templateUrl: './active-total-property.component.html',
    styleUrl: './active-total-property.component.scss'
})
export class ActiveTotalPropertyComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
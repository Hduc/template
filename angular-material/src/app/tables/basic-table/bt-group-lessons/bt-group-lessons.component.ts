import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-bt-group-lessons',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './bt-group-lessons.component.html',
    styleUrl: './bt-group-lessons.component.scss'
})
export class BtGroupLessonsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
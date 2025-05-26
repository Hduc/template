import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-bt-my-tasks',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './bt-my-tasks.component.html',
    styleUrl: './bt-my-tasks.component.scss'
})
export class BtMyTasksComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
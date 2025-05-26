import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-todays-schedule',
    imports: [NgScrollbarModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './todays-schedule.component.html',
    styleUrl: './todays-schedule.component.scss'
})
export class TodaysScheduleComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
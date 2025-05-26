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
    selector: 'app-recent-bookings',
    imports: [NgScrollbarModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './recent-bookings.component.html',
    styleUrl: './recent-bookings.component.scss'
})
export class RecentBookingsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.formattedDate = this.formatDate();
    }

    // Current Day
    formattedDate: string;
    formatDate(): string {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        return today.toLocaleDateString('en-US', options); // Format: "December 10, 2025"
    }

}
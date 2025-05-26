import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-calendar',
    imports: [RouterLink, MatCardModule, FullCalendarModule, WorkingScheduleComponent],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

    // Calendar
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        dayMaxEvents: true, // when too many events in a day, show the popover
        weekends: true,
        events: [
            {
                title: 'Annual Conference 2025',
                date: '2025-01-01'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-01-26',
                end: '2025-01-29'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-02-14'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-02-22'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-03-26'
            },
            {
                title: 'Meeting with Developers',
                date: '2025-03-02'
            },
            {
                title: 'Annual Conference 2025',
                date: '2025-04-10'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-04-22',
                end: '2025-04-26'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-05-24'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-05-15'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-06-28'
            },
            {
                title: 'Annual Conference 2025',
                date: '2025-06-14'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-07-05',
                end: '2025-07-08'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-08-14'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-08-24'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-09-22'
            },
            {
                title: 'Meeting with Developers',
                date: '2025-09-30'
            },
            {
                title: 'Annual Conference 2025',
                date: '2025-10-05'
            },
            {
                title: 'Product Lunch Webinar 2025 & Meet With Trezo Angular',
                start: '2025-10-19',
                end: '2025-10-22'
            },
            {
                title: 'Tech Summit 2025',
                date: '2025-11-20'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2025-11-26'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-11-29'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-12-05'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-12-17'
            },
            {
                title: 'Web Development Seminar',
                date: '2025-12-20'
            }
        ],
        plugins: [dayGridPlugin]
    };

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
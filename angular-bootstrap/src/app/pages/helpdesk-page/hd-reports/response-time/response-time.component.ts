import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResponseTimeService } from './response-time.service';

@Component({
    selector: 'app-response-time',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './response-time.component.html',
    styleUrl: './response-time.component.scss'
})
export class ResponseTimeComponent {

    constructor(
        private responseTimeService: ResponseTimeService
    ) {}

    ngOnInit(): void {
        this.responseTimeService.loadChart();
    }

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

}
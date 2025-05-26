import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-low-stock-alerts',
    imports: [NgIf, RouterLink],
    templateUrl: './low-stock-alerts.component.html',
    styleUrl: './low-stock-alerts.component.scss'
})
export class LowStockAlertsComponent {

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
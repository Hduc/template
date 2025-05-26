import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-upcoming-vip-reservations',
    imports: [NgIf, RouterLink],
    templateUrl: './upcoming-vip-reservations.component.html',
    styleUrl: './upcoming-vip-reservations.component.scss'
})
export class UpcomingVipReservationsComponent {
    
    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-dropdown')) {
            this.isCardHeaderOpen = false;
        }
    }

}
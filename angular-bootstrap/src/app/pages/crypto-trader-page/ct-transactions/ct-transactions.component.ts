import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-ct-transactions',
    imports: [RouterLink, NgIf],
    templateUrl: './ct-transactions.component.html',
    styleUrl: './ct-transactions.component.scss'
})
export class CtTransactionsComponent {

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
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
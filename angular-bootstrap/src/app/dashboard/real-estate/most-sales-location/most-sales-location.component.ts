import { Component, HostListener } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-most-sales-location',
    imports: [NgIf],
    templateUrl: './most-sales-location.component.html',
    styleUrl: './most-sales-location.component.scss'
})
export class MostSalesLocationComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
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
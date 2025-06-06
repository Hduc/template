import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-most-popular',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './most-popular.component.html',
    styleUrl: './most-popular.component.scss'
})
export class MostPopularComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, SettingsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    title = 'Trezo - Angular 19 Tailwind CSS Landing Page Template';

    constructor(
        private router: Router,
        private viewportScroller: ViewportScroller
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Scroll to the top after each navigation end
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }

}
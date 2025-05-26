import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

    constructor() {
        if (this.isBrowser()) {
            // Dark Mode
            this.isLandingDarkTheme = JSON.parse(localStorage.getItem('isLandingDarkTheme')!) || false;
            this.updateDarkBodyClass();

            // RTL Mode
            this.isLandingRtlEnabledTheme = JSON.parse(localStorage.getItem('isLandingRtlEnabledTheme')!) || false;
            this.updateRTLBodyClass();
        }
    }

    // Check if code is running in the browser
    private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof document !== 'undefined';
    }

    // Dark Mode
    private isLandingDarkTheme!: boolean;
    toggleTheme() {
        this.isLandingDarkTheme = !this.isLandingDarkTheme;
        if (this.isBrowser()) {
            localStorage.setItem('isLandingDarkTheme', JSON.stringify(this.isLandingDarkTheme));
            this.updateDarkBodyClass();
        }
    }
    isLandingDark() {
        return this.isLandingDarkTheme;
    }
    private updateDarkBodyClass() {
        if (this.isBrowser()) {
            if (this.isLandingDarkTheme) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        }
    }

    // RTL Mode
    private isLandingRtlEnabledTheme!: boolean;
    toggleRTLEnabledTheme() {
        this.isLandingRtlEnabledTheme = !this.isLandingRtlEnabledTheme;
        if (this.isBrowser()) {
            localStorage.setItem('isLandingRtlEnabledTheme', JSON.stringify(this.isLandingRtlEnabledTheme));
            this.updateRTLBodyClass();
        }
    }
    isLandingRtlEnabled() {
        return this.isLandingRtlEnabledTheme;
    }
    private updateRTLBodyClass() {
        if (this.isBrowser()) {
            if (this.isLandingRtlEnabledTheme) {
                document.body.classList.add('rtl-enabled');
            } else {
                document.body.classList.remove('rtl-enabled');
            }
        }
    }

    // isToggled
    private isToggled = new BehaviorSubject<boolean>(false);
    get isToggled$() {
        return this.isToggled.asObservable();
    }
    toggle() {
        this.isToggled.next(!this.isToggled.value);
    }

}
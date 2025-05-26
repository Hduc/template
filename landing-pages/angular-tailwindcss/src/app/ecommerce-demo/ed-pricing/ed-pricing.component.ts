import { Component } from '@angular/core';
import { PricingComponent } from '../common/pricing/pricing.component';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { UseCasesComponent } from '../common/use-cases/use-cases.component';
import { TestimonialsComponent } from '../common/testimonials/testimonials.component';
import { CtaComponent } from '../common/cta/cta.component';

@Component({
    selector: 'app-ed-pricing',
    imports: [PricingComponent, DashboardShowcaseComponent, UseCasesComponent, TestimonialsComponent, CtaComponent],
    templateUrl: './ed-pricing.component.html',
    styleUrl: './ed-pricing.component.scss'
})
export class EdPricingComponent {}
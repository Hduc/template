import { Component } from '@angular/core';
import { FeaturesComponent } from '../common/features/features.component';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { UseCasesComponent } from '../common/use-cases/use-cases.component';
import { TestimonialsComponent } from '../common/testimonials/testimonials.component';
import { CtaComponent } from '../common/cta/cta.component';

@Component({
    selector: 'app-ed-features',
    imports: [FeaturesComponent, DashboardShowcaseComponent, UseCasesComponent, TestimonialsComponent, CtaComponent],
    templateUrl: './ed-features.component.html',
    styleUrl: './ed-features.component.scss'
})
export class EdFeaturesComponent {}
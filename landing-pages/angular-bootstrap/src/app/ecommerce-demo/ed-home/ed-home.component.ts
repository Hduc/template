import { Component } from '@angular/core';
import { BlogComponent } from '../common/blog/blog.component';
import { CtaComponent } from '../common/cta/cta.component';
import { BannerComponent } from '../common/banner/banner.component';
import { PartnersComponent } from '../common/partners/partners.component';
import { WhyTrezoComponent } from '../common/why-trezo/why-trezo.component';
import { FeaturesComponent } from '../common/features/features.component';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { UseCasesComponent } from '../common/use-cases/use-cases.component';
import { TestimonialsComponent } from '../common/testimonials/testimonials.component';
import { PricingComponent } from '../common/pricing/pricing.component';

@Component({
    selector: 'app-ed-home',
    imports: [BannerComponent, PartnersComponent, WhyTrezoComponent, FeaturesComponent, DashboardShowcaseComponent, UseCasesComponent, TestimonialsComponent, PricingComponent, BlogComponent, CtaComponent],
    templateUrl: './ed-home.component.html',
    styleUrl: './ed-home.component.scss'
})
export class EdHomeComponent {}
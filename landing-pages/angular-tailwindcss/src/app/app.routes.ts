import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LmsCoursesDemoComponent } from './lms-courses-demo/lms-courses-demo.component';
import { LcdHomeComponent } from './lms-courses-demo/lcd-home/lcd-home.component';
import { LcdWhyChooseUsComponent } from './lms-courses-demo/lcd-why-choose-us/lcd-why-choose-us.component';
import { LcdCoursesComponent } from './lms-courses-demo/lcd-courses/lcd-courses.component';
import { LcdCourseDetailsComponent } from './lms-courses-demo/lcd-course-details/lcd-course-details.component';
import { LcdHowItWorksComponent } from './lms-courses-demo/lcd-how-it-works/lcd-how-it-works.component';
import { LcdPricingComponent } from './lms-courses-demo/lcd-pricing/lcd-pricing.component';
import { LcdCheckoutComponent } from './lms-courses-demo/lcd-checkout/lcd-checkout.component';
import { MarketingDemoComponent } from './marketing-demo/marketing-demo.component';
import { MdHomeComponent } from './marketing-demo/md-home/md-home.component';
import { MdFeaturesComponent } from './marketing-demo/md-features/md-features.component';
import { MdPricingComponent } from './marketing-demo/md-pricing/md-pricing.component';
import { MdBlogComponent } from './marketing-demo/md-blog/md-blog.component';
import { MdBlogDetailsComponent } from './marketing-demo/md-blog-details/md-blog-details.component';
import { EcommerceDemoComponent } from './ecommerce-demo/ecommerce-demo.component';
import { EdHomeComponent } from './ecommerce-demo/ed-home/ed-home.component';
import { EdFeaturesComponent } from './ecommerce-demo/ed-features/ed-features.component';
import { EdUseCasesComponent } from './ecommerce-demo/ed-use-cases/ed-use-cases.component';
import { EdTestimonialsComponent } from './ecommerce-demo/ed-testimonials/ed-testimonials.component';
import { EdPricingComponent } from './ecommerce-demo/ed-pricing/ed-pricing.component';
import { EdBlogComponent } from './ecommerce-demo/ed-blog/ed-blog.component';
import { EdBlogDetailsComponent } from './ecommerce-demo/ed-blog-details/ed-blog-details.component';

export const routes: Routes = [
    {
        path: '',
        component: EcommerceDemoComponent,
        children: [
            {path: '', component: EdHomeComponent},
            {path: 'features', component: EdFeaturesComponent},
            {path: 'use-cases', component: EdUseCasesComponent},
            {path: 'testimonials', component: EdTestimonialsComponent},
            {path: 'pricing', component: EdPricingComponent},
            {path: 'blog', component: EdBlogComponent},
            {path: 'blog-details', component: EdBlogDetailsComponent}
        ]
    },
    {
        path: 'lms-courses-demo',
        component: LmsCoursesDemoComponent,
        children: [
            {path: '', component: LcdHomeComponent},
            {path: 'why-choose-us', component: LcdWhyChooseUsComponent},
            {path: 'courses', component: LcdCoursesComponent},
            {path: 'course-details', component: LcdCourseDetailsComponent},
            {path: 'how-it-works', component: LcdHowItWorksComponent},
            {path: 'pricing', component: LcdPricingComponent},
            {path: 'checkout', component: LcdCheckoutComponent}
        ]
    },
    {
        path: 'marketing-demo',
        component: MarketingDemoComponent,
        children: [
            {path: '', component: MdHomeComponent},
            {path: 'features', component: MdFeaturesComponent},
            {path: 'pricing', component: MdPricingComponent},
            {path: 'blog', component: MdBlogComponent},
            {path: 'blog-details', component: MdBlogDetailsComponent}
        ]
    },
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];
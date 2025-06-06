import * as React from "react";
import NextLink from "next/link";
import TestimonialsStyle1 from "@/components/Testimonials/TestimonialsStyle1";
import TestimonialsStyle2 from "@/components/Testimonials/TestimonialsStyle2";
import TestimonialsStyle3 from "@/components/Testimonials/TestimonialsStyle3";
import TestimonialsStyle4 from "@/components/Testimonials/TestimonialsStyle4";
import TestimonialsStyle5 from "@/components/Testimonials/TestimonialsStyle5";
import TestimonialsStyle6 from "@/components/Testimonials/TestimonialsStyle6";
import TestimonialsStyle7 from "@/components/Testimonials/TestimonialsStyle7";
import TestimonialsStyle8 from "@/components/Testimonials/TestimonialsStyle8";
import { getDictionary } from "../../[lang]/dictionaries";

export default async function Page({ params }: any) {
  const { lang } = await params; // Await params to get lang
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Testimonials</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href={`/${lang}/dashboard/ecommerce/`}>
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Testimonials</li>
        </ul>
      </div>

      <TestimonialsStyle1 {...dict} />

      <TestimonialsStyle2 />

      <TestimonialsStyle3 />

      <TestimonialsStyle4 />

      <TestimonialsStyle5 />

      <TestimonialsStyle6 />

      <TestimonialsStyle7 />

      <TestimonialsStyle8 />
    </>
  );
}

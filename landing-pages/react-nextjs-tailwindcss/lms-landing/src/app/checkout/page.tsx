 
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import PageBanner from "@/components/Common/PageBanner"; 

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Checkout" homePageUrl="/" homePageText="Home" />

      <CheckoutForm />
    </>
  );
}

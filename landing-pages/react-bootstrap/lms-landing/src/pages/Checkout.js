import CheckoutForm from "../components/Checkout/CheckoutForm";
import PageBanner from "../components/Common/PageBanner";

const Checkout = () => {
  return (
    <>
      <PageBanner pageTitle="Checkout" homePageUrl="/" homePageText="Home" />
    
      <CheckoutForm />
    </>
  );
};

export default Checkout;

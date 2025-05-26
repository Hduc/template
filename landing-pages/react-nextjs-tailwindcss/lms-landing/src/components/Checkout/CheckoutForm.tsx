"use client";

import React from "react"; 

const CheckoutForm: React.FC = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#0e1321] py-[70px] md:py-[90px] lg:py-[110px] xl:py-[130px]">
        <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1308px] mx-auto px-[12px]">
          <div className="bg-[#f6f5f3] dark:bg-[#0a0e19] px-[15px] md:px-[20px] py-[13px] border-t-[2px] border-primary-500 mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[70px]">
            <div className="relative md:text-[15px] lg:text-md font-medium ltr:pl-[35px] rtl:pl-[35px]">
              <i className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0">
                web_asset
              </i>
              Have a coupon? 
              <a
                href="#"
                className="text-primary-500 transition-all hover:text-primary-700"
              >
                Click here to enter your code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[25px]">
            <div>
              <h3 className="!text-[20px] md:!text-xl lg:!text-2xl !font-medium !text-gray-700 dark:!text-gray-100 !mb-[20px] md:!mb-[25px]">
                Billing details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="Last name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Company Name ( Optional )
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Country / Region *
                  </label>
                  <select className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 px-[16px] !outline-0 transition-all focus:border-primary-500 cursor-pointer">
                    <option value="0">
                      United States (US)
                    </option>
                    <option value="1">United Kingdom (UK)</option>
                    <option value="2">Canada (CA)</option>
                    <option value="3">Australia (AU)</option>
                    <option value="4">Germany (DE)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="House number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Town / City *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="Town / city"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    State *
                  </label>
                  <select className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 px-[16px] !outline-0 transition-all focus:border-primary-500 cursor-pointer">
                    <option value="0">
                      California
                    </option>
                    <option value="1">New York</option>
                    <option value="2">Texas</option>
                    <option value="3">Florida</option>
                    <option value="4">Illinois</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="ZIP code"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Phone *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="Phone no"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    className="block w-full h-[45px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 px-[16px] !outline-0 transition-all focus:border-primary-500"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <h3 className="!text-[20px] md:!text-xl lg:!text-2xl !font-medium !text-gray-700 dark:!text-gray-100 !mb-[20px] md:!mb-[25px] mt-[30px] md:mt-[40px] lg:mt-[50px]">
                Additional information
              </h3>
              <label className="font-medium text-gray-700 dark:text-gray-100 block mb-[10px]">
                Order Notes (Optional)
              </label>
              <textarea
                className="block w-full h-[130px] border border-gray-200 dark:border-gray-900 rounded-md text-base text-gray-700 dark:text-gray-100 placeholder:text-gray-400 p-[16px] !outline-0 transition-all focus:border-primary-500"
                placeholder="Type here..."
              ></textarea>
            </div>

            <div className="ltr:lg:pl-[50px] rtl:lg:pl-[50px] ltr:xl:pl-[110px] rtl:xl:pl-[110px]">
              <h3 className="!text-[20px] md:!text-xl lg:!text-2xl !font-medium !text-gray-700 dark:!text-gray-100 !mb-[20px] md:!mb-[25px]">
                Your order
              </h3>
              <div className="table-responsive overflow-x-auto">
                <table className="w-full">
                  <thead className="text-gray-700 dark:text-gray-100">
                    <tr>
                      <th className="font-medium text-[15px] md:text-[16px] lg:text-lg ltr:text-left rtl:text-right px-[25px] md:px-[30px] lg:px-[40px] py-[12px] md:py-[15px] lg:py-[19px] bg-[#f6f5f3] dark:bg-[#15203c] whitespace-nowrap border-t-0 border-b-0 ltr:first:rounded-tl-[15px] ltr:last:rounded-tr-[15px] rtl:first:rounded-tr-[15px] rtl:last:rounded-tl-[15px]">
                        Products
                      </th>
                      <th className="font-medium text-[15px] md:text-[16px] lg:text-lg ltr:text-left rtl:text-right px-[25px] md:px-[30px] lg:px-[40px] py-[12px] md:py-[15px] lg:py-[19px] bg-[#f6f5f3] dark:bg-[#15203c] whitespace-nowrap border-t-0 border-b-0 ltr:first:rounded-tl-[15px] ltr:last:rounded-tr-[15px] rtl:first:rounded-tr-[15px] rtl:last:rounded-tl-[15px]">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-100">
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        Digital Marketing Mastery
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        <span className="md:text-[15px] lg:text-md text-primary-500">
                          $49
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        Mobile App Development
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        <span className="md:text-[15px] lg:text-md text-primary-500">
                          $69
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        <span className="md:text-[15px] lg:text-md font-medium">
                          Subtotal
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        <span className="md:text-[15px] lg:text-md text-primary-500 font-medium">
                          $118
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        <span className="md:text-[15px] lg:text-md font-medium">
                          Total
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[25px] md:px-[30px] lg:px-[40px] py-[13px] md:py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                        <span className="md:text-[15px] lg:text-md text-primary-500 font-medium">
                          $118
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-[20px] bg-[#f6f5f3] dark:bg-[#0a0e19] p-[20px] md:p-[30px] lg:p-[40px] rounded-[15px]">
                <h4 className="!font-medium !mb-[20px] !text-[18px] md:!text-[20px]">
                  Payment Method
                </h4>

                <div className="checkout-payment-method flex items-center gap-[20px] md:gap-[25px]">
                  <div className="text-center relative w-[82px] h-[66px] pt-[4px] rounded-md bg-gray-50 dark:bg-dark border border-primary-100 dark:border-[#172036] transition-all">
                    <i className="material-symbols-outlined !text-2xl text-primary-500">
                      paid
                    </i>
                    <span className="block -mt-[2px] md:-mt-[4px]">Cash</span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="cashType"
                      className="top-0 left-0 z-[1] w-full h-full m-0 absolute cursor-pointer opacity-0"
                    />
                  </div>

                  <div className="text-center relative w-[82px] h-[66px] pt-[4px] rounded-md bg-gray-50 dark:bg-dark border border-primary-100 dark:border-[#172036] transition-all">
                    <i className="material-symbols-outlined !text-2xl text-primary-500">
                      credit_card
                    </i>
                    <span className="block -mt-[2px] md:-mt-[4px]">Card</span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      defaultChecked
                      id="cardType"
                      className="top-0 left-0 z-[1] w-full h-full m-0 absolute cursor-pointer opacity-0"
                    />
                  </div>

                  <div className="text-center relative w-[82px] h-[66px] pt-[4px] rounded-md bg-gray-50 dark:bg-dark border border-primary-100 dark:border-[#172036] transition-all">
                    <i className="material-symbols-outlined !text-2xl text-primary-500">
                      wallet
                    </i>
                    <span className="block -mt-[2px] md:-mt-[4px]">
                      E-Wallet
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="eWalletType"
                      className="top-0 left-0 z-[1] w-full h-full m-0 absolute cursor-pointer opacity-0"
                    />
                  </div>
                </div>
                
                <button
                  type="button"
                  className="mt-[20px] md:mt-[25px] font-medium block w-full transition-all rounded-md md:text-[15px] lg:text-md py-[10px] md:py-[11px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @include('partials.front.styles')

        <title>Trezo - Tailwind CSS Admin Dashboard Template</title>

        @vite('resources/css/app.css')

    </head>
    <body>
        @include('partials.dashboard.sidebar')
        @include('partials.dashboard.header')

        <div class="main-content transition-all flex flex-col overflow-hidden min-h-screen" id="main-content">

            <!-- Breadcrumb -->
            <div class="mb-[25px] md:flex items-center justify-between">
                <h5 class="!mb-0">
                    Order Details
                </h5>
                <ol class="breadcrumb mt-[12px] md:mt-0">
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        <a href="/" class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] transition-all hover:text-primary-500">
                            <i class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 !text-lg -mt-px text-primary-500 top-1/2 -translate-y-1/2">
                                home
                            </i>
                            Dashboard
                        </a>
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        eCommerce
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        Orders
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        Order Details
                    </li>
                </ol>
            </div>

            <!-- Order Details -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
                <div class="lg:col-span-2">
                    <div class="trezo-card bg-primary-500 mb-[25px] p-[20px] md:p-[25px] rounded-md">
                        <div class="trezo-card-header mb-[5px] md:mb-[25px] sm:flex items-center justify-between">
                            <div class="trezo-card-title">
                                <h5 class="!mb-0 !text-white">
                                    Tracking ID: 000346798254
                                </h5>
                            </div>
                        </div>
                        <div class="trezo-card-content">
                            <div class="relative z-[1] sm:flex items-center justify-between">
                                <span class="block absolute left-0 right-0 top-[25px] -z-[1] border-t border-dashed border-white hidden md:inline-block"></span>
                                <div class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0">
                                    <div class="rounded-full bg-primary-500 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white">
                                        01
                                    </div>
                                    <span class="block text-white font-semibold mt-[13px]">
                                        Order Placed
                                    </span>
                                </div>
                                <div class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0">
                                    <div class="rounded-full bg-primary-500 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white">
                                        02
                                    </div>
                                    <span class="block text-white font-semibold mt-[13px]">
                                        Packed
                                    </span>
                                </div>
                                <div class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0">
                                    <div class="rounded-full bg-info-400 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white">
                                        03
                                    </div>
                                    <span class="block text-white font-semibold mt-[13px]">
                                        Shipped
                                    </span>
                                </div>
                                <div class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0">
                                    <div class="rounded-full bg-primary-500 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white ltr:ml-auto rtl:mr-auto">
                                        04
                                    </div>
                                    <span class="block text-white font-semibold mt-[13px]">
                                        Delivered
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
                            <div class="trezo-card-title">
                                <h5 class="!mb-0">
                                    Recent Orders
                                </h5>
                            </div>
                            <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
                                <h5 class="!mb-0">
                                    Customer ID : 357951
                                </h5>
                            </div>
                        </div>
                        <div class="trezo-card-content">
                            <div class="table-responsive overflow-x-auto">
                                <table class="w-full">
                                    <thead class="text-black dark:text-white">
                                        <tr>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                                Order ID
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                                Product
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                                Items
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                                Price
                                            </th>
                                            <th class="font-medium text-left px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tr-md">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-black dark:text-white">
                                        <tr>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                #JAN-2345
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <div class="flex items-center">
                                                    <div class="rounded-md w-[40px]">
                                                        <img src="/assets/images/products/product1.jpg" class="inline-block rounded-md" alt="product-image">
                                                    </div>
                                                    <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                        <a href="/dashboard/product-details" class="block font-medium md:text-[15px] transition-all hover:text-primary-500">
                                                            Smart Band
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $80.00
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $80.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                #JAN-1323
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <div class="flex items-center">
                                                    <div class="rounded-md w-[40px]">
                                                        <img src="/assets/images/products/product2.jpg" class="inline-block rounded-md" alt="product-image">
                                                    </div>
                                                    <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                        <a href="/dashboard/product-details" class="block font-medium md:text-[15px] transition-all hover:text-primary-500">
                                                            Headphone
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                3
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $150.00
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $450.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                #DEC-1234
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <div class="flex items-center">
                                                    <div class="rounded-md w-[40px]">
                                                        <img src="/assets/images/products/product3.jpg" class="inline-block rounded-md" alt="product-image">
                                                    </div>
                                                    <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                        <a href="/dashboard/product-details" class="block font-medium md:text-[15px] transition-all hover:text-primary-500">
                                                            iPhone 15 Plus
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $750.00
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $750.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                #DEC-3567
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <div class="flex items-center">
                                                    <div class="rounded-md w-[40px]">
                                                        <img src="/assets/images/products/product4.jpg" class="inline-block rounded-md" alt="product-image">
                                                    </div>
                                                    <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                        <a href="/dashboard/product-details" class="block font-medium md:text-[15px] transition-all hover:text-primary-500">
                                                            Bluetooth Speaker
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                5
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $15.00
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $75.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                #DEC-1098
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <div class="flex items-center">
                                                    <div class="rounded-md w-[40px]">
                                                        <img src="/assets/images/products/product5.jpg" class="inline-block rounded-md" alt="product-image">
                                                    </div>
                                                    <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                        <a href="/dashboard/product-details" class="block font-medium md:text-[15px] transition-all hover:text-primary-500">
                                                            Airbuds 2nd Gen
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                2
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $25.00
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $50.00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1">
                    <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
                            <div class="trezo-card-title">
                                <h5 class="!mb-0">
                                    Order Summary
                                </h5>
                            </div>
                        </div>
                        <div class="trezo-card-content">
                            <div class="table-responsive overflow-x-auto">
                                <table class="w-full">
                                    <thead class="text-black dark:text-white">
                                        <tr>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                                Description
                                            </th>
                                            <th class="font-medium ltr:text-right rtl:text-left px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-black dark:text-white">
                                        <tr>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Grand Total :
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $1,105.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Discount :
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                -$105.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Tax :
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $75.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Subtotal :
                                            </td>
                                            <td class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $1,000.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Shipping Charge :
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $80.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Coupon Charge :
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $20.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Total :
                                            </td>
                                            <td class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                $900.00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h6 class="mt-[20px] md:mt-[25px] mb-[10px]">
                                Payment Method
                            </h6>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <img src="/assets/images/master-card.png" alt="master-card">
                                    <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                        <span class="block text-black dark:text-white font-medium">
                                            Payment
                                        </span>
                                        <span class="block text-sm mt-[3px]">
                                            Via MasterCard
                                        </span>
                                    </div>
                                </div>
                                <span class="block">
                                    $900.00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]">
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                        <div class="trezo-card-title">
                            <h5 class="!mb-0">
                                Billing Details
                            </h5>
                        </div>
                    </div>
                    <div class="trezo-card-content">
                        <ul>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Name:
                                </span>
                                Gary Fraser
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Email:
                                </span>
                                example@trezo.com
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Phone:
                                </span>
                                +1 444 333 5566
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Address:
                                </span>
                                715 Maple St, Hamletville, England
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                        <div class="trezo-card-title">
                            <h5 class="!mb-0">
                                Shipping Details
                            </h5>
                        </div>
                    </div>
                    <div class="trezo-card-content">
                        <ul>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Shipping Date:
                                </span>
                                25 Nov 2025 10:30 AM
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Email:
                                </span>
                                example@trezo.com
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Phone:
                                </span>
                                +1 444 333 5566
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Address:
                                </span>
                                789 Pine St, Villageton, England
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                        <div class="trezo-card-title">
                            <h5 class="!mb-0">
                                Delivery Details
                            </h5>
                        </div>
                    </div>
                    <div class="trezo-card-content">
                        <ul>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    XYZ Delivery
                                </span>
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Order ID:
                                </span>
                                XXXXXX1004
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Payment Method:
                                </span>
                                Master Card
                            </li>
                            <li class="mb-[12px] last:mb-0">
                                <span class="text-black dark:text-white font-medium">
                                    Email:
                                </span>
                                example@trezo.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="grow"></div>
            @include('partials.dashboard.footer')
        </div>

        @include('partials.front.scripts')
    </body>
</html>

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
                    Sellers
                </h5>
                <ol class="breadcrumb mt-[12px] md:mt-0">
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        <a href="/dashboard" class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] transition-all hover:text-primary-500">
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
                        Sellers
                    </li>
                </ol>
            </div>

            <!-- Sellers -->
            <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                <div class="trezo-card-header sm:flex items-center justify-between">
                    <div class="trezo-card-title">
                        <form class="relative sm:w-[265px]">
                            <label class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
                                <i class="material-symbols-outlined !text-[20px]">
                                    search
                                </i>
                            </label>
                            <input type="text" placeholder="Search seller here....." class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400">
                        </form>
                    </div>
                    <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
                        <a href="/dashboard/create-seller" class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white" id="add-new-popup-toggle">
                            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                                <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                                    add
                                </i>
                                Add New Seller
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[25px] mb-[25px]">
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller1.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Ava Turner
                                    </a>
                                    <span class="block">
                                        turner@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                25 Nov 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $9,999.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $5,999.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                TechMaster Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller2.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Ethan Parker
                                    </a>
                                    <span class="block">
                                        ethan@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                01 Nov 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                39
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $6,756.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $4,645.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                RisionTech Outlet
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller3.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Isabella Lee
                                    </a>
                                    <span class="block">
                                        isabella@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                30 Sep 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                75
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $5,550.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $4,350.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                ComfotLiving
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller4.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Thompson Torres
                                    </a>
                                    <span class="block">
                                        thompson@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                02 Aug 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                99
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $2,100.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $1,500.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                SportFit Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller5.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Lucas Lyon
                                    </a>
                                    <span class="block">
                                        lucas@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                22 July 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                350
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $15,250.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $10,200.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Velas Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller6.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Morgan Sturges
                                    </a>
                                    <span class="block">
                                        morgan@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                10 Jun 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                200
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $10,500.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $5,458.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Herna Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller7.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Sophia McNeel
                                    </a>
                                    <span class="block">
                                        sophia@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                16 Feb 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                80
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $2,580.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $1,500.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Dona Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller8.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Rodriguez Meade
                                    </a>
                                    <span class="block">
                                        rodriguez@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                12 May 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                150
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $9,000.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $6,000.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Willi Dav Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller9.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Olivia Taylor
                                    </a>
                                    <span class="block">
                                        olivia@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                10 Apr 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                75
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $7,500.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $4,500.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Donne Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller10.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        David Smith
                                    </a>
                                    <span class="block">
                                        david@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                03 Dec 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                500
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $18,500.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $13,200.00
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                RichMaster Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller11.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Alice Johnson
                                    </a>
                                    <span class="block">
                                        alice@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                23 Mar 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $6,300.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $4,000.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Dajon Store
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="/assets/images/sellers/seller12.png" alt="seller-image">
                                <div class="ltr:ml-[15px] rtl:mr-[15px]">
                                    <a href="/dashboard/seller-details" class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500">
                                        Emily Brown
                                    </a>
                                    <span class="block">
                                        emily@trezo.com
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <a href="/dashboard/seller-details" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                    <i class="material-symbols-outlined !text-md">
                                        visibility
                                    </i>
                                </a>
                                <button type="button" class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip" id="customTooltip" data-text="Edit">
                                    <i class="material-symbols-outlined !text-md">
                                        edit
                                    </i>
                                </button>
                                <button type="button" class="text-danger-500 leading-none custom-tooltip" id="customTooltip" data-text="Delete">
                                    <i class="material-symbols-outlined !text-md">
                                        delete
                                    </i>
                                </button>
                            </div>
                        </div>
                        <ul class="mt-[20px]">
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Last Sale Date:
                                </span>
                                20 Jan 2025
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Item Stock:
                                </span>
                                99
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Wallet Balance:
                                </span>
                                $3,699.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Revenue:
                                </span>
                                $2,599.50
                            </li>
                            <li class="text-black dark:text-white mb-[10px] last:mb-0">
                                <span class="text-gray-500 dark:text-gray-400">
                                    Store:
                                </span>
                                Barbahall Store
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                <div class="trezo-card-content">
                    <div class="sm:flex sm:items-center justify-between">
                        <p class="!mb-0">
                            Showing 12 of 36 results
                        </p>
                        <ol class="mt-[10px] sm:mt-0">
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/sellers" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    <span class="opacity-0">
                                        0
                                    </span>
                                    <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                                        chevron_left
                                    </i>
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/sellers" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white">
                                    1
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/sellers" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    2
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/sellers" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    3
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/sellers" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    4
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/sellers" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    <span class="opacity-0">
                                        0
                                    </span>
                                    <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                                        chevron_right
                                    </i>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="grow"></div>
            @include('partials.dashboard.footer')
        </div>

        @include('partials.front.scripts')
    </body>
</html>

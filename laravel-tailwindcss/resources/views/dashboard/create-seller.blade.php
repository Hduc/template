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
                    Create Seller
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
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        Create Seller
                    </li>
                </ol>
            </div>

            <!-- Create Seller -->
            <form>
                <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-content">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[25px]">
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Seller Name
                                </label>
                                <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="E.g. Ava Turner">
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Store Name
                                </label>
                                <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="E.g. TechMaster Store">
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Phone Number
                                </label>
                                <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="E.g. +1 555-123-4567">
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Email Address
                                </label>
                                <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="E.g. ava@trezo.com">
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Date of Birth
                                </label>
                                <input type="date" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500">
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    City
                                </label>
                                <select class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500">
                                    <option selected>
                                        Select
                                    </option>
                                    <option value="1">
                                        New York
                                    </option>
                                    <option value="2">
                                        Tokyo
                                    </option>
                                    <option value="3">
                                        London
                                    </option>
                                    <option value="4">
                                        Amsterdam
                                    </option>
                                    <option value="5">
                                        Paris
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Country
                                </label>
                                <select class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500">
                                    <option selected>
                                        Select
                                    </option>
                                    <option value="1">
                                        Switzerland
                                    </option>
                                    <option value="2">
                                        New Zealand
                                    </option>
                                    <option value="3">
                                        Germany
                                    </option>
                                    <option value="4">
                                        United States
                                    </option>
                                    <option value="5">
                                        Japan
                                    </option>
                                    <option value="6">
                                        Netherlands
                                    </option>
                                    <option value="7">
                                        Sweden
                                    </option>
                                    <option value="8">
                                        Canada
                                    </option>
                                    <option value="9">
                                        United Kingdom
                                    </option>
                                    <option value="10">
                                        Australia
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    ZIP / Postcode
                                </label>
                                <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="E.g. 3100">
                            </div>
                            <div>
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Wallet Balance
                                </label>
                                <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="E.g. $12,092.00">
                            </div>
                            <div class="sm:col-span-3">
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Description
                                </label>
                                <div id="richTextEditor" class="!h-[179px]"></div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="mb-[10px] text-black dark:text-white font-medium block">
                                    Upload Image
                                </label>
                                <div id="fileUploader">
                                    <div class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]">
                                        <div class="flex items-center justify-center">
                                            <div class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]">
                                                <i class="ri-upload-2-line"></i>
                                            </div>
                                            <p class="!leading-[1.5]">
                                                <strong class="text-black dark:text-white">Click to upload</strong><br> you file here
                                            </p>
                                        </div>
                                        <input type="file" id="fileInput" class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer">
                                    </div>
                                    <ul id="fileList"></ul>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[20px] md:mt-[25px]">
                            <button type="button" class="font-medium inline-block transition-all rounded-md md:text-md ltr:mr-[15px] rtl:ml-[15px] py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-danger-500 text-white hover:bg-danger-400">
                                Cancel
                            </button>
                            <button type="button" class="font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400">
                                <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
                                    <i class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2">
                                        add
                                    </i>
                                    Create Seller
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <div class="grow"></div>
            @include('partials.dashboard.footer')
        </div>

        @include('partials.front.scripts')
    </body>
</html>

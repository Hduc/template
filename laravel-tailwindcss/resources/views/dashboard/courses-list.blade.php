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
                    Courses List
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
                        LMS
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        Courses List
                    </li>
                </ol>
            </div>
            
            <!-- Courses List -->
            <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
                    <div class="trezo-card-title">
                        <form class="relative sm:w-[265px]">
                            <label class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
                                <i class="material-symbols-outlined !text-[20px]">
                                    search
                                </i>
                            </label>
                            <input type="text" placeholder="Search course here....." class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400">
                        </form>
                    </div>
                    <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
                        <div class="trezo-card-dropdown relative">
                            <button type="button" class="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500" id="dropdownToggleBtn">
                                <span class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                                    All Courses
                                    <i class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                                </span>
                            </button>
                            <ul class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                <li>
                                    <button type="button" class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                        Paid
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                        Free
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                        Top Rated
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                        Best Seller
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
                    <div class="table-responsive overflow-x-auto">
                        <table class="w-full">
                            <thead class="text-black dark:text-white">
                                <tr>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        ID
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Course Name
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Category
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Instructor
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Enrolled
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Start Date
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        End Date
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Price
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-black dark:text-white">
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #854
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Cybersecurity Awareness
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Technology
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user6.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Oliver Khan
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            180
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            25 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            25 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $49.99
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #853
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Python Programming
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Science
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user7.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Ava Cooper
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            250
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            20 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            20 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $45.32
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #852
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Big Data Analytics
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Health & Wellness
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user8.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Isabella Evans
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            320
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            15 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            15 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $99.00
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #851
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Introduction to Blockchain
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Education
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user9.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Mia Hughes
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            135
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            10 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            10 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $29.75
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #850
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Network Administration
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Food & Cooking
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user10.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Noah Mitchell
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            460
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            05 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            05 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $56.99
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #849
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Artificial Intelligence
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Lifestyle & Fashion
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user11.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Olivia Lucy
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            515
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            10 Feb 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            10 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $78.75
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #848
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Introduction Of Python
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Technology
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user6.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Oliver Khan
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            180
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            25 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            25 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $49.99
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #847
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Graphic Design Basics
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Science
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user7.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Ava Cooper
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            250
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            20 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            20 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $45.32
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #846
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Business Finance
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Health & Wellness
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user8.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Isabella Evans
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            320
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            15 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            15 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $99.00
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            #845
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <a href="course-details.html" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Photoshop Mastery
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        Education
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="rounded-full w-[40px]">
                                                <img src="/assets/images/users/user9.jpg" class="inline-block rounded-full" alt="user-image">
                                            </div>
                                            <div class="ltr:ml-[12px] rtl:mr-[12px]">
                                                <span class="block font-medium">
                                                    Mia Hughes
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            135
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            10 Mar 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            10 Apr 2025
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $29.75
                                        </span>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center gap-[9px]">
                                            <button type="button" class="text-primary-500 leading-none custom-tooltip" id="customTooltip" data-text="View">
                                                <i class="material-symbols-outlined !text-md">
                                                    visibility
                                                </i>
                                            </button>
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between">
                        <p class="!mb-0 text-sm">
                            Showing 10 of 36 results
                        </p>
                        <ol class="mt-[10px] sm:mt-0">
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/courses-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    <span class="opacity-0">
                                        0
                                    </span>
                                    <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                                        chevron_left
                                    </i>
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/courses-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white">
                                    1
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/courses-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    2
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/courses-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    3
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/courses-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    4
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/courses-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
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

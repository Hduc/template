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
                    My Drive
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
                        Apps
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        File Manager
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        My Drive
                    </li>
                </ol>
            </div>

            <!-- File Manager -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
                <div class="lg:col-span-1">

                    <!-- Sidebar -->
                    <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div class="trezo-card-content">
                            <form class="relative mb-[20px] md:mb-[27px]">
                                <input type="text" class="block w-full rounded-md text-black dark:text-white px-[15px] bg-gray-50 dark:bg-[#15203c] border border-gray-50 dark:border-[#15203c] focus:border-primary-500 h-[44px] outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400" placeholder="Search here.....">
                                <button class="absolute text-primary-500 mt-px ltr:right-[15px] rtl:left-[15px] top-1/2 -translate-y-1/2 hover:text-primary-400">
                                    <i class="material-symbols-outlined !text-[20px]">
                                        search
                                    </i>
                                </button>
                            </form>
                            <ul class="mb-[20px] md:mb-[25px]">
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="/dashboard/my-drive" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-primary-500 hover:text-primary-500">
                                        <i class="material-symbols-outlined absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            drive_eta
                                        </i>
                                        My Drive
                                        <span class="text-sm font-normal block text-gray-500 dark:text-gray-400">
                                            4
                                        </span>
                                    </a>
                                    <ul class="ltr:pl-[28px] rtl:pr-[28px] mt-[15px] md:mt-[17px] mb-[17px] md:mb-[21px]">
                                        <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
                                            <a href="/dashboard/my-assets" class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]">
                                                <span class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"></span>
                                                Assets
                                            </a>
                                        </li>
                                        <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
                                            <a href="/dashboard/my-projects" class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]">
                                                <span class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"></span>
                                                Projects
                                            </a>
                                        </li>
                                        <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
                                            <a href="/dashboard/my-personal" class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]">
                                                <span class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"></span>
                                                Personal
                                            </a>
                                        </li>
                                        <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
                                            <a href="/dashboard/my-applications" class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]">
                                                <span class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"></span>
                                                Applications
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="/dashboard/my-documents" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500">
                                        <i class="material-symbols-outlined text-success-600 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            description
                                        </i>
                                        Documents
                                    </a>
                                </li>
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="/dashboard/my-media" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500">
                                        <i class="material-symbols-outlined text-info-400 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            perm_media
                                        </i>
                                        Media
                                    </a>
                                </li>
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="/dashboard/my-recent" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500">
                                        <i class="material-symbols-outlined text-purple-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            schedule
                                        </i>
                                        Recent
                                    </a>
                                </li>
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="/dashboard/my-important" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500">
                                        <i class="material-symbols-outlined text-warning-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            grade
                                        </i>
                                        Important
                                    </a>
                                </li>
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="#" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500">
                                        <i class="material-symbols-outlined text-secondary-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            report_gmailerrorred
                                        </i>
                                        Spam
                                        <span class="text-sm font-normal block text-gray-500 dark:text-gray-400">
                                            10
                                        </span>
                                    </a>
                                </li>
                                <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
                                    <a href="#" class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500">
                                        <i class="material-symbols-outlined text-danger-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]">
                                            delete
                                        </i>
                                        Trash
                                        <span class="text-sm font-normal block text-gray-500 dark:text-gray-400">
                                            15
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div class="border-t border-gray-100 dark:border-[#172036] -mx-[20px] md:-mx-[25px] px-[20px] md:px-[25px] pt-[20px] md:pt-[25px]">
                                <h6 class="!mb-[11px] !text-[15px]">
                                    Storage Status
                                </h6>
                                <span class="block text-sm ">
                                    % 50 GB used of 100 GB
                                </span>
                                <div class="mt-[11px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]">
                                    <div class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md" style="width: 50%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="lg:col-span-3">

                    <!-- My Drive -->
                    <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                        <div class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                            <div class="trezo-card-title">
                                <h5 class="!mb-0">
                                    My Drive
                                </h5>
                            </div>
                        </div>
                        <div class="trezo-card-content">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
                                <div class="bg-primary-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]">
                                    <div class="form-check">
                                        <input type="checkbox" class="cursor-pointer">
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
                                        <div class="leading-none text-primary-500 ltr:mr-[10px] rtl:ml-[10px]">
                                            <i class="material-symbols-outlined !text-[45px]">
                                                folder_open
                                            </i>
                                        </div>
                                        <h6 class="!mb-0 !text-[15px]">
                                            Assets
                                        </h6>
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between">
                                        <div class="block text-black dark:text-white">
                                            387 Files
                                        </div>
                                        <div class="block text-black dark:text-white">
                                            4.5 GB
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-orange-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]">
                                    <div class="form-check">
                                        <input type="checkbox" class="cursor-pointer">
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
                                        <div class="leading-none text-orange-500 ltr:mr-[10px] rtl:ml-[10px]">
                                            <i class="material-symbols-outlined !text-[45px]">
                                                news
                                            </i>
                                        </div>
                                        <h6 class="!mb-0 !text-[15px]">
                                            Projects
                                        </h6>
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between">
                                        <div class="block text-black dark:text-white">
                                            123 Files
                                        </div>
                                        <div class="block text-black dark:text-white">
                                            1.4 GB
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-success-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]">
                                    <div class="form-check">
                                        <input type="checkbox" class="cursor-pointer">
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
                                        <div class="leading-none text-success-600 ltr:mr-[10px] rtl:ml-[10px]">
                                            <i class="material-symbols-outlined !text-[45px]">
                                                folder
                                            </i>
                                        </div>
                                        <h6 class="!mb-0 !text-[15px]">
                                            Personal
                                        </h6>
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between">
                                        <div class="block text-black dark:text-white">
                                            435 Files
                                        </div>
                                        <div class="block text-black dark:text-white">
                                            5.2 GB
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-purple-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]">
                                    <div class="form-check">
                                        <input type="checkbox" class="cursor-pointer">
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
                                        <div class="leading-none text-purple-500 ltr:mr-[10px] rtl:ml-[10px]">
                                            <i class="material-symbols-outlined !text-[45px]">
                                                topic
                                            </i>
                                        </div>
                                        <h6 class="!mb-0 !text-[15px]">
                                            Templates
                                        </h6>
                                    </div>
                                    <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between">
                                        <div class="block text-black dark:text-white">
                                            431 Files
                                        </div>
                                        <div class="block text-black dark:text-white">
                                            1.3 GB
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Files -->
                    <div class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                            <div class="trezo-card-title">
                                <h5 class="!mb-0">
                                    Recent Files
                                </h5>
                            </div>
                            <div class="trezo-card-subtitle">
                                <button type="button" class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white" id="add-new-popup-toggle">
                                    <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                                        <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                                            add
                                        </i>
                                        Add New File
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="trezo-card-content">
                            <div class="table-responsive overflow-x-auto">
                                <table class="w-full">
                                    <thead class="text-black dark:text-white">
                                        <tr>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                File Name
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                Owner
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                Listed Date
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                File Type
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                File Size
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                File Items
                                            </th>
                                            <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-black dark:text-white">
                                        <tr>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Dashboard Design
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Linda Maddox
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                19 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .pdf
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1.2 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                69
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Important Documents
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Juanita Lavigne
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                18 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .zip
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                2.6 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                236
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Product Design
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Roy Pope
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                17 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .psd
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                3.2 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                365
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Dashboard Design File
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Cecil Jones
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                16 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .fig
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                25
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Media Files
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Trudy Venegas
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                15 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .jpg
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1.5 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                153
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Graphic Design File
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Sharilyn Goodall
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                14 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .png
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1.6 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                142
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Personal Photo
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Annie Carver
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                13 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .gif
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1.2 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                175
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                <a href="#" class="flex items-center font-medium transition-all hover:text-primary-500">
                                                    <i class="material-symbols-outlined ltr:mr-[8px] rtl:ml-[8px] !text-2xl text-[#ffb264]">
                                                        folder
                                                    </i>
                                                    Audio File
                                                </a>
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                Winona Etzel
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                12 Nov 2025
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                .mp3
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                1.3 GB
                                            </td>
                                            <td class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
                                                136
                                            </td>
                                            <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l">
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
                            <div class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between">
                                <p class="!mb-0 text-sm">
                                    Showing 8 of 36 results
                                </p>
                                <ol class="mt-[10px] sm:mt-0">
                                    <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                        <a href="#" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                            <span class="opacity-0">
                                                0
                                            </span>
                                            <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                                                chevron_left
                                            </i>
                                        </a>
                                    </li>
                                    <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                        <a href="#" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white">
                                            1
                                        </a>
                                    </li>
                                    <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                        <a href="#" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                            2
                                        </a>
                                    </li>
                                    <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                        <a href="#" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                            3
                                        </a>
                                    </li>
                                    <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                        <a href="#" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                            4
                                        </a>
                                    </li>
                                    <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                        <a href="#" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
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

                </div>
            </div>

            <div class="grow"></div>
            @include('partials.dashboard.footer')
            @include('partials.dashboard.add_file_modal')
        </div>

        @include('partials.front.scripts')
    </body>
</html>

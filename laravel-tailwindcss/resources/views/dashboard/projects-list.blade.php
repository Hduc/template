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
                    Projects List
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
                        Project Management
                    </li>
                    <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
                        Projects List
                    </li>
                </ol>
            </div>
            
            <!-- Projects List -->
            <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
                    <div class="trezo-card-title">
                        <h5 class="!mb-0">
                            All Projects
                        </h5>
                    </div>
                    <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
                        <a href="/dashboard/create-project" class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white">
                            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                                <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                                    add
                                </i>
                                Create New Project
                            </span>
                        </a>
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
                                        Project Name
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Client
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Assignees
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Budget
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Start Date
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        End Date
                                    </th>
                                    <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Status
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Project CyberSphere
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        NovaTech Solutions
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user15.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user11.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user6.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user9.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +10
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $4,500
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
                                        <span class="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs">
                                            Finished
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Digital Oasis Initiative
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        AlphaWave Innovations
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user7.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user8.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user9.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +04
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $6,800
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
                                        <span class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs">
                                            In Progress
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            CloudScape Evolution
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        InnovateIQ Inc.
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user10.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user12.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +07
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $2,500
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
                                        <span class="px-[8px] py-[3px] inline-block bg-purple-50 dark:bg-[#15203c] text-purple-500 rounded-sm font-medium text-xs">
                                            Pending
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Data Dynamo Drive
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        BlueSky Technologies
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user13.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user14.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user15.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user12.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +15
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $7,500
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
                                        <span class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs">
                                            In Progress	
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            QuantumLeap Quest
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        NexGen Systems
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user7.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user9.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user6.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +03
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $3,400
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
                                        <span class="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs">
                                            Finished
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Product Development
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        NovaTech Solutions
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user15.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user11.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user6.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user9.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +10
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $4,500
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
                                        <span class="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs">
                                            Finished
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Python Upgrade
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        AlphaWave Innovations
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user7.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user8.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user9.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +04
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $6,800
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
                                        <span class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs">
                                            In Progress
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Project Monitoring
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        InnovateIQ Inc.
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user10.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user12.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +07
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $2,500
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
                                        <span class="px-[8px] py-[3px] inline-block bg-purple-50 dark:bg-[#15203c] text-purple-500 rounded-sm font-medium text-xs">
                                            Pending
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Project Alpho
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        BlueSky Technologies
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user13.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user14.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user15.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user12.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +15
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $7,500
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
                                        <span class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs">
                                            In Progress	
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
                                        <a href="/dashboard/project-overview" class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500">
                                            Dashboard Design
                                        </a>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        NexGen Systems
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <div class="flex items-center">
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user7.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user9.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white">
                                                <img alt="user-image" class="rounded-full" src="/assets/images/users/user6.jpg" />
                                            </div>
                                            <div class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center">
                                                +03
                                            </div>
                                        </div>
                                    </td>
                                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                        <span class="text-gray-500 dark:text-gray-400">
                                            $3,400
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
                                        <span class="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs">
                                            Finished
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
                                <a href="/dashboard/projects-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    <span class="opacity-0">
                                        0
                                    </span>
                                    <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                                        chevron_left
                                    </i>
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/projects-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white">
                                    1
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/projects-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    2
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/projects-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    3
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/projects-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                    4
                                </a>
                            </li>
                            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                <a href="/dashboard/projects-list" class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
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

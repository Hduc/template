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
        <!-- Light/Dark Mode Button -->
        <button type="button" class="light-dark-toggle leading-none inline-block transition-all text-[#fe7a36] absolute top-[20px] md:top-[25px] ltr:right-[20px] rtl:left-[20px] ltr:md:right-[25px] rtl:md:left-[25px]" id="light-dark-toggle">
            <i class="material-symbols-outlined !text-[20px] md:!text-[22px]">
                light_mode
            </i>
        </button>
        <!-- End Light/Dark Mode Button -->

        <!-- Sign Up -->
        <div class="bg-white dark:bg-[#0a0e19] py-[60px] md:py-[80px] lg:py-[120px] xl:py-[135px]">
            <div class="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1255px]">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
                    <div class="xl:ltr:-mr-[25px] xl:rtl:-ml-[25px] 2xl:ltr:-mr-[45px] 2xl:rtl:-ml-[45px] rounded-[25px] order-2 lg:order-1">
                        <img src="/assets/images/sign-up.jpg" alt="sign-up-image" class="rounded-[25px]">
                    </div>
                    <div class="xl:ltr:pl-[90px] xl:rtl:pr-[90px] 2xl:ltr:pl-[120px] 2xl:rtl:pr-[120px] order-1 lg:order-2">
                        <img src="/assets/images/logo-big.svg" alt="logo" class="inline-block dark:hidden">
                        <img src="/assets/images/white-logo-big.svg" alt="logo" class="hidden dark:inline-block">
                        <div class="my-[17px] md:my-[25px]">
                            <h1 class="!font-semibold !text-[22px] md:!text-xl lg:!text-2xl !mb-[5px] md:!mb-[7px]">
                                Sign Up to Trezo Dashboard
                            </h1>
                            <p class="font-medium lg:text-md text-[#445164] dark:text-gray-400">
                                Sign Up with social account or enter your details
                            </p>
                        </div>
                        <div class="flex items-center justify-between mb-[20px] md:mb-[23px] gap-[12px]">
                            <div class="grow">
                                <button type="button" class="block text-center w-full rounded-md transition-all py-[8px] md:py-[10.5px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500">
                                    <img src="/assets/images/icons/google.svg" class="inline-block" alt="google">
                                </button>
                            </div>
                            <div class="grow">
                                <button type="button" class="block text-center w-full rounded-md transition-all py-[8px] md:py-[10.5px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500">
                                    <img src="/assets/images/icons/facebook2.svg" class="inline-block" alt="google">
                                </button>
                            </div>
                            <div class="grow">
                                <button type="button" class="block text-center w-full rounded-md transition-all py-[8px] md:py-[10.5px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500">
                                    <img src="/assets/images/icons/apple.svg" class="inline-block" alt="google">
                                </button>
                            </div>
                        </div>
                        <div class="mb-[15px] relative">
                            <label class="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
                                Full Name
                            </label>
                            <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="Enter your full name">
                        </div>
                        <div class="mb-[15px] relative">
                            <label class="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
                                Email Address
                            </label>
                            <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="example@trezo.com">
                        </div>
                        <div class="mb-[15px] relative" id="passwordHideShow">
                            <label class="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
                                Password
                            </label>
                            <input type="password" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" id="password" placeholder="Type password">
                            <button class="absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[12px] transition-all hover:text-primary-500" id="toggleButton" type="button">
                                <i class="ri-eye-off-line"></i>
                            </button>
                        </div>
                        <button type="submit" class="md:text-md block w-full text-center transition-all rounded-md font-medium my-[20px] md:my-[25px] py-[12px] px-[25px] text-white bg-primary-500 hover:bg-primary-400">
                            <span class="flex items-center justify-center gap-[5px]">
                                <i class="material-symbols-outlined">
                                    person_4
                                </i>
                                Sign Up
                            </span>
                        </button>
                        <p class="!leading-[1.6]">
                            By confirming your email, you agree to our <a href="#" class="font-medium text-black dark:text-white transition-all hover:text-primary-500">Terms of Service</a>  and that you have read and understood our <a href="#" class="font-medium text-black dark:text-white transition-all hover:text-primary-500">Privacy Policy</a>
                        </p>
                        <p class="!leading-[1.6]">
                            Already have an account. <a href="/sign-in" class="text-primary-500 transition-all font-semibold hover:underline">Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Sign Up -->
        
        @include('partials.front.scripts')
    </body>
</html>

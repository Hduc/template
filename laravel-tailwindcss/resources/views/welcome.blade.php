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
        @include('partials.front.light_dark_btn')
        @include('partials.front.navigation')

        <div class="pt-[125px] md:pt-[145px] lg:pt-[185px]">
                <div class="container 2xl:max-w-[1320px] mx-auto px-[12px] relative z-[1]">
                    <div class="text-center mx-auto xl:max-w-[935px] mb-[30px] md:mb-[45px] lg:mb-[60px]">
                        <h1 class="!text-[32px] md:!text-[40px] lg:!text-[50px] xl:!text-[60px] !mb-[13px] md:!mb-[22px] lg:!mb-[25px] xl:!mb-[30px] -tracking-[.5px] md:-tracking-[1px] xl:-tracking-[1.5px] !leading-[1.2]">
                            Insights On-the-Go: Access Your Dashboard Anywhere, Anytime
                        </h1>
                        <p class="mx-auto !leading-[1.6] md:text-[15px] lg:text-[16px] xl:text-lg md:max-w-[600px] lg:max-w-[650px] xl:max-w-[740px] xl:tracking-[.2px]">
                            Our intuitive interface transforms complex data into actionable insights, empowering you to make informed decisions with confidence.
                        </p>
                        <a href="/" class="inline-block lg:text-[15px] xl:text-[16px] mt-[5px] md:mt-[12px] lg:mt-[20px] xl:mt-[25px] py-[12px] px-[17px] bg-primary-600 text-white rounded-md transition-all font-medium hover:bg-primary-500">
                            <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                                <i class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                                    person
                                </i>
                                Get started - It is free
                            </span>
                        </a>
                    </div>
                    <div class="text-center">
                        <img src="/assets/images/front-pages/dashboard.png" class="inline-block" alt="dashboard-image">
                    </div>
                    <div class="absolute -z-[1] ltr:-right-[30px] rtl:-left-[30px] bottom-[50px] blur-[150px]">
                        <img src="/assets/images/front-pages/shape3.png" alt="shape3">
                    </div>
                    <div class="absolute -z-[1] ltr:left-[25px] rtl:right-[25px] -top-[210px] blur-[125px]">
                        <img src="/assets/images/front-pages/shape2.png" alt="shape3">
                    </div>
                    <div class="absolute -z-[1] ltr:right-[260px] rtl:left-[260px] -top-[125px] blur-[75px]">
                        <img src="/assets/images/front-pages/shape4.png" alt="shape3">
                    </div>
                    <div class="absolute -z-[1] ltr:-left-[50px] rtl:-right-[50px] bottom-0 blur-[75px]">
                        <img src="/assets/images/front-pages/shape5.png" alt="shape3">
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div class="relative z-[1] py-[60px] md:py-[80px] lg:py-[100px] xl:py-[150px]">
                <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
                    <div class="mx-auto text-center md:max-w-[650px] lg:max-w-[810px] xl:max-w-[785px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]">
                        <div class="inline-block relative mt-[10px] mb-[20px]">
                            <span class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]">
                                Key Features
                                <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                                <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                            </span>
                        </div>
                        <h2 class="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]">
                            Discover What Sets Us Apart: Highlighted Dashboard Functions
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                        <div class="text-center ltr:lg:text-left rtl:lg:text-right">
                            <div class="flex items-center justify-center w-[80px] h-[80px] md:w-[85px] md:h-[85px] rounded-[10px] md:rounded-[17px] mb-[20px] lg:mb-[22px] bg-primary-100 dark:bg-[#15203c] mx-auto lg:mx-0">
                                <img src="/assets/images/front-pages/stacks.svg" class="inline-block" alt="stacks">
                            </div>
                            <h3 class="!text-lg md:!text-[20px] lg:!text-[22px] xl:!text-[24px] !mb-[10px] md:!mb-[12px] xl:!mb-[13px] !font-semibold !leading-[1.2]">
                                Real-Time Updates
                            </h3>
                            <p class="xl:max-w-[375px] !leading-[1.6]">
                                Provide real-time updates and notifications to keep users informed about important events, changes, or updates within the system.
                            </p>
                        </div>
                        <div class="text-center ltr:lg:text-left rtl:lg:text-right">
                            <div class="flex items-center justify-center w-[80px] h-[80px] md:w-[85px] md:h-[85px] rounded-[10px] md:rounded-[17px] mb-[20px] lg:mb-[22px] bg-purple-100 dark:bg-[#15203c] mx-auto lg:mx-0">
                                <img src="/assets/images/front-pages/code.svg" class="inline-block" alt="code">
                            </div>
                            <h3 class="!text-lg md:!text-[20px] lg:!text-[22px] xl:!text-[24px] !mb-[10px] md:!mb-[12px] xl:!mb-[13px] !font-semibold !leading-[1.2]">
                                Quality Code
                            </h3>
                            <p class="xl:max-w-[375px] !leading-[1.6]">
                                These features include adherence to coding standards, robust error handling mechanisms, efficient algorithms, scalability, maintainability, and readability.
                            </p>
                        </div>
                        <div class="text-center ltr:lg:text-left rtl:lg:text-right">
                            <div class="flex items-center justify-center w-[80px] h-[80px] md:w-[85px] md:h-[85px] rounded-[10px] md:rounded-[17px] mb-[20px] lg:mb-[22px] bg-orange-100 dark:bg-[#15203c] mx-auto lg:mx-0">
                                <img src="/assets/images/front-pages/support_agent.svg" class="inline-block" alt="support_agent">
                            </div>
                            <h3 class="!text-lg md:!text-[20px] lg:!text-[22px] xl:!text-[24px] !mb-[10px] md:!mb-[12px] xl:!mb-[13px] !font-semibold !leading-[1.2]">
                                24/7 Customer Support
                            </h3>
                            <p class="xl:max-w-[375px] !leading-[1.6]">
                                Our 24/7 customer support is dedicated to providing round-the-clock assistance, ensuring that help is always available whenever our customers need it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Features -->

            <!-- Widgets -->
            <div class="pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[150px]">
                <div class="container 2xl:max-w-[1320px] mx-auto px-[12px] relative z-[1]">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
                        <div class="relative">
                            <div class="md:max-w-[600px] lg:max-w-[400px] xl:max-w-[510px] p-[15px] md:p-[25px] md:p-[30px] xl:py-[27px] xl:px-[34px] rounded-[7px] bg-white/[.54] dark:bg-black/[.54] border border-white/[.10] dark:border-black/[.10] backdrop-blur-[5.400000095367432px]">
                                <img src="/assets/images/front-pages/order-summary.png" class="inline-block" alt="order-summary-image">
                            </div>
                            <div class="absolute ltr:right-0 rtl:left-0 ltr:lg:right-[30px] rtl:lg:left-[30px] max-w-[120px] md:max-w-[200px] lg:max-w-[219px] -mt-[15px] md:-mt-[17px] rounded-[4.294px] top-1/2 -translate-y-1/2 drop-shadow-xl">
                                <img src="/assets/images/front-pages/courses-sales.jpg" class="inline-block rounded-[4.294px]" alt="courses-sales-image">
                            </div>
                        </div>
                        <div>
                            <h2 class="!leading-[1.2] !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] !mb-[15px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px]">
                                Tailor Your Dashboard: Unleash the Power of Customizable Widgets
                            </h2>
                            <ul class="ltr:xl:pl-[18px] rtl:xl:pr-[18px] mt-[25px] md:mt-[30px] lg:mt-[35px] xl:mt-[65px]">
                                <li class="relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[28px] rtl:md:pr-[28px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] mb-[25px] xl:mb-[32px] last:mb-0">
                                    <i class="material-symbols-outlined absolute text-primary-600 !text-[17px] md:!text-lg lg:!text-[20px] ltr:left-0 rtl:right-0 top-0 leading-none">
                                        done_outline
                                    </i>
                                    <h3 class="!text-[15px] md:!text-[16px] lg:!text-[17px] xl:!text-lg !mb-[8px] md:!mb-[10px] !font-semibold !leading-[1.2]">
                                        Tailored Display
                                    </h3>
                                    <p class="!leading-[1.6] md:max-w-[458px]">
                                        Easily arrange, resize, and configure widgets to showcase the data most relevant to your workflow.
                                    </p>
                                </li>
                                <li class="relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[28px] rtl:md:pr-[28px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] mb-[25px] xl:mb-[32px] last:mb-0">
                                    <i class="material-symbols-outlined absolute text-primary-600 !text-[17px] md:!text-lg lg:!text-[20px] ltr:left-0 rtl:right-0 top-0 leading-none">
                                        done_outline
                                    </i>
                                    <h3 class="!text-[15px] md:!text-[16px] lg:!text-[17px] xl:!text-lg !mb-[8px] md:!mb-[10px] !font-semibold !leading-[1.2]">
                                        Personalized Insights
                                    </h3>
                                    <p class="!leading-[1.6] md:max-w-[458px]">
                                        Customize widget content and visualization options to match your specific preferences and priorities.
                                    </p>
                                </li>
                                <li class="relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[28px] rtl:md:pr-[28px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] mb-[25px] xl:mb-[32px] last:mb-0">
                                    <i class="material-symbols-outlined absolute text-primary-600 !text-[17px] md:!text-lg lg:!text-[20px] ltr:left-0 rtl:right-0 top-0 leading-none">
                                        done_outline
                                    </i>
                                    <h3 class="!text-[15px] md:!text-[16px] lg:!text-[17px] xl:!text-lg !mb-[8px] md:!mb-[10px] !font-semibold !leading-[1.2]">
                                        Flexibility and Versatility
                                    </h3>
                                    <p class="!leading-[1.6] md:max-w-[458px]">
                                        Adapt widgets to evolving business needs by adjusting layouts, styles, and data sources with ease.
                                    </p>
                                </li>
                                <li class="relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[28px] rtl:md:pr-[28px] ltr:lg:pl-[30px] rtl:lg:pr-[30px] mb-[25px] xl:mb-[32px] last:mb-0">
                                    <i class="material-symbols-outlined absolute text-primary-600 !text-[17px] md:!text-lg lg:!text-[20px] ltr:left-0 rtl:right-0 top-0 leading-none">
                                        done_outline
                                    </i>
                                    <h3 class="!text-[15px] md:!text-[16px] lg:!text-[17px] xl:!text-lg !mb-[8px] md:!mb-[10px] !font-semibold !leading-[1.2]">
                                        Seamless Integration
                                    </h3>
                                    <p class="!leading-[1.6] md:max-w-[458px]">
                                        Integrate widgets seamlessly with other dashboard components and external systems for a cohesive user experience.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="absolute -top-[60px] ltr:left-[65px] rtl:right-[65px] -z-[1] blur-[150px]">
                        <img src="/assets/images/front-pages/shape1.png" alt="shape1">
                    </div>
                    <div class="absolute -bottom-[30px] ltr:right-[20px] rtl:left-[20px] -z-[1] blur-[125px]">
                        <img src="/assets/images/front-pages/shape2.png" alt="shape1">
                    </div>
                </div>
            </div>
            <!-- End Widgets -->

            <!-- Testimonials -->
            <div class="relative z-[1] pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[150px]">
                <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
                    <div class="mx-auto text-center md:max-w-[650px] lg:max-w-[810px] xl:max-w-[855px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]">
                        <div class="inline-block relative mt-[10px] mb-[20px]">
                            <span class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]">
                                Testimonials
                                <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                                <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                            </span>
                        </div>
                        <h2 class="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]">
                            Inspiring Feedback: What Users Love About Trezo Dashboard
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                        <div class="bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] xl:p-[40px] rounded-[7px]">
                            <div class="leading-none mb-[12px] md:mb-[20px] text-[16px] md:text-[19px] text-[#fe7a36] flex items-center gap-[4px]">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            <p class="text-[14px] md:text-[16px] font-medium !leading-[1.6]">
                                Trezo Dashboard Template has transformed how we manage our data. Its intuitive design and customizable features have streamlined our analytics process, enabling us to make informed decisions faster than ever before.
                            </p>
                            <div class="flex items-center mt-[15px] md:mt-[20px] gap-[12px] md:gap-[15px]">
                                <img src="/assets/images/front-pages/user1.jpg" alt="user-image" class="rounded-full w-[50px]">
                                <div>
                                    <h5 class="!text-[15px] md:!text-[16px] !mb-[3px] !font-semibold">
                                        Sarah Thompson
                                    </h5>
                                    <span class="block">
                                        Data Analyst
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] xl:p-[40px] rounded-[7px]">
                            <div class="leading-none mb-[12px] md:mb-[20px] text-[16px] md:text-[19px] text-[#fe7a36] flex items-center gap-[4px]">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                            </div>
                            <p class="text-[14px] md:text-[16px] font-medium !leading-[1.6]">
                                As a developer, I appreciate the flexibility and robustness of Trezo Dashboard Template. It offers a wide range of features that cater to our diverse needs, and its clean codebase has made customization a breeze. Highly recommended!
                            </p>
                            <div class="flex items-center mt-[15px] md:mt-[20px] gap-[12px] md:gap-[15px]">
                                <img src="/assets/images/front-pages/user2.jpg" alt="user-image" class="rounded-full w-[50px]">
                                <div>
                                    <h5 class="!text-[15px] md:!text-[16px] !mb-[3px] !font-semibold">
                                        John Smith
                                    </h5>
                                    <span class="block">
                                        Software Engineer
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] xl:p-[40px] rounded-[7px]">
                            <div class="leading-none mb-[12px] md:mb-[20px] text-[16px] md:text-[19px] text-[#fe7a36] flex items-center gap-[4px]">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-line"></i>
                            </div>
                            <p class="text-[14px] md:text-[16px] font-medium !leading-[1.6]">
                                Trezo Dashboard Template has been a lifesaver for our organization. It's helped us streamline our reporting processes and communicate insights effectively across departments. The time saved has allowed us to focus more on strategic initiatives.
                            </p>
                            <div class="flex items-center mt-[15px] md:mt-[20px] gap-[12px] md:gap-[15px]">
                                <img src="/assets/images/front-pages/user3.jpg" alt="user-image" class="rounded-full w-[50px]">
                                <div>
                                    <h5 class="!text-[15px] md:!text-[16px] !mb-[3px] !font-semibold">
                                        Alex Rodriguez
                                    </h5>
                                    <span class="block">
                                        Marketing Director
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] xl:p-[40px] rounded-[7px]">
                            <div class="leading-none mb-[12px] md:mb-[20px] text-[16px] md:text-[19px] text-[#fe7a36] flex items-center gap-[4px]">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                <i class="ri-star-line"></i>
                            </div>
                            <p class="text-[14px] md:text-[16px] font-medium !leading-[1.6]">
                                I can't recommend the Trezo Template enough. It's helped us gain a deeper understanding of our business metrics and identify areas for improvement. The responsive support team is a bonus, we are always ready to assist whenever needed.
                            </p>
                            <div class="flex items-center mt-[15px] md:mt-[20px] gap-[12px] md:gap-[15px]">
                                <img src="/assets/images/front-pages/user4.jpg" alt="user-image" class="rounded-full w-[50px]">
                                <div>
                                    <h5 class="!text-[15px] md:!text-[16px] !mb-[3px] !font-semibold">
                                        Kevin Brown
                                    </h5>
                                    <span class="block">
                                        Jessica Martinez
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] xl:p-[40px] rounded-[7px]">
                            <div class="leading-none mb-[12px] md:mb-[20px] text-[16px] md:text-[19px] text-[#fe7a36] flex items-center gap-[4px]">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            <p class="text-[14px] md:text-[16px] font-medium !leading-[1.6]">
                                Using Trezo Dashboard Template has been a game-changer for our team. The ability to customize widgets to suit our specific needs has allowed us to gain deeper insights into our performance metrics and drive business growth.
                            </p>
                            <div class="flex items-center mt-[15px] md:mt-[20px] gap-[12px] md:gap-[15px]">
                                <img src="/assets/images/front-pages/user5.jpg" alt="user-image" class="rounded-full w-[50px]">
                                <div>
                                    <h5 class="!text-[15px] md:!text-[16px] !mb-[3px] !font-semibold">
                                        Olivia Adams
                                    </h5>
                                    <span class="block">
                                        Marketing Coordinator
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] xl:p-[40px] rounded-[7px]">
                            <div class="leading-none mb-[12px] md:mb-[20px] text-[16px] md:text-[19px] text-[#fe7a36] flex items-center gap-[4px]">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                            </div>
                            <p class="text-[14px] md:text-[16px] font-medium !leading-[1.6]">
                                As a startup, we needed a dashboard solution that was both powerful and cost-effective. Trezo Dashboard Template checked all the boxes for us. It's helped us stay agile and competitive in a fast-paced market.
                            </p>
                            <div class="flex items-center mt-[15px] md:mt-[20px] gap-[12px] md:gap-[15px]">
                                <img src="/assets/images/front-pages/user3.jpg" alt="user-image" class="rounded-full w-[50px]">
                                <div>
                                    <h5 class="!text-[15px] md:!text-[16px] !mb-[3px] !font-semibold">
                                        Daniel Lee
                                    </h5>
                                    <span class="block">
                                        Co-founder, StartupX
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Testimonials -->

            <!-- Team -->
            <div class="container 2xl:max-w-[1320px] mx-auto px-[12px] relative z-[1]">
                <div class="md:max-w-[500px] lg:max-w-[675px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]">
                    <div class="inline-block relative mt-[10px] mb-[20px]">
                        <span class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"></span>
                        <span class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"></span>
                        <span class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]">
                            Our Team
                            <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                        </span>
                    </div>
                    <h2 class="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]">
                        Introducing Our Exceptional Team. Meet the Minds Driving Our Success
                    </h2>
                </div>
                <div class="relative" id="frontPageTeamSlides">
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="mb-px pt-[15px] px-[15px] pb-[12px] rounded-[7px] bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <img src="/assets/images/front-pages/team1.jpg" alt="team-image" class="rounded-[7px]">
                                </div>
                                <div class="p-[20px] md:p-[25px] lg:p-[30px] rounded-[7px] flex items-center justify-between bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <div>
                                        <h3 class="!font-semibold !mb-[5px] !text-[16px] md:!text-lg !leading-[1.2]">
                                            Michael Johnson
                                        </h3>
                                        <span class="block">
                                            CEO
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-[8px]">
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-twitter-x-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="mb-px pt-[15px] px-[15px] pb-[12px] rounded-[7px] bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <img src="/assets/images/front-pages/team2.jpg" alt="team-image" class="rounded-[7px]">
                                </div>
                                <div class="p-[20px] md:p-[25px] lg:p-[30px] rounded-[7px] flex items-center justify-between bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <div>
                                        <h3 class="!font-semibold !mb-[5px] !text-[16px] md:!text-lg !leading-[1.2]">
                                            Emily Davis
                                        </h3>
                                        <span class="block">
                                            Project Manager
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-[8px]">
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-twitter-x-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="mb-px pt-[15px] px-[15px] pb-[12px] rounded-[7px] bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <img src="/assets/images/front-pages/team3.jpg" alt="team-image" class="rounded-[7px]">
                                </div>
                                <div class="p-[20px] md:p-[25px] lg:p-[30px] rounded-[7px] flex items-center justify-between bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <div>
                                        <h3 class="!font-semibold !mb-[5px] !text-[16px] md:!text-lg !leading-[1.2]">
                                            Daniel Lee
                                        </h3>
                                        <span class="block">
                                            Sales Team Lead
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-[8px]">
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-twitter-x-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="mb-px pt-[15px] px-[15px] pb-[12px] rounded-[7px] bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <img src="/assets/images/front-pages/team4.jpg" alt="team-image" class="rounded-[7px]">
                                </div>
                                <div class="p-[20px] md:p-[25px] lg:p-[30px] rounded-[7px] flex items-center justify-between bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]">
                                    <div>
                                        <h3 class="!font-semibold !mb-[5px] !text-[16px] md:!text-lg !leading-[1.2]">
                                            Olivia John
                                        </h3>
                                        <span class="block">
                                            Frontend Lead
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-[8px]">
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-twitter-x-fill"></i>
                                        </a>
                                        <a href="#" class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500">
                                            <i class="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[25px] md:mt-0 md:absolute ltr:md:right-0 rtl:md:left-0 md:-top-[110px] lg:-top-[138px] xl:-top-[164px] flex items-center justify-center gap-[10px] md:gap-[15px]">
                        <div class="swiper-button-prev !text-[20px] lg:!text-[24px] !mt-0 !relative !left-0 !right-0 !top-0 !flex !items-center !justify-center !w-[40px] md:!w-[50px] lg:!w-[60px] xl:!w-[64px] !h-[40px] md:!h-[50px] lg:!h-[60px] xl:!h-[64px] !rounded-full !transition-all !text-gray-500 dark:!text-gray-400 !bg-primary-50 dark:!bg-[#15203c] hover:!bg-primary-600 hover:!text-white">
                            <i class="ri-arrow-left-line"></i>
                        </div>
                        <div class="swiper-button-next !text-[20px] lg:!text-[24px] !mt-0 !relative !left-0 !right-0 !top-0 !flex !items-center !justify-center !w-[40px] md:!w-[50px] lg:!w-[60px] xl:!w-[64px] !h-[40px] md:!h-[50px] lg:!h-[60px] xl:!h-[64px] !rounded-full !transition-all !text-gray-500 dark:!text-gray-400 !bg-primary-50 dark:!bg-[#15203c] hover:!bg-primary-600 hover:!text-white">
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
                <div class="ltr:left-[90px] rtl:right-[90px] -z-[1] bottom-[15px] absolute blur-[150px]">
                    <img src="/assets/images/front-pages/shape1.png" alt="shape1">
                </div>
                <div class="ltr:-right-[15px] rtl:-left-[15px] -z-[1] -bottom-[130px] absolute blur-[125px]">
                    <img src="/assets/images/front-pages/shape1.png" alt="shape1">
                </div>
            </div>
            <!-- End Team -->

             <!-- FAQ -->
            <div class="relative z-[1] pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[150px]">
                <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
                    <div class="mx-auto text-center lg:max-w-[650px] lg:max-w-[810px] xl:max-w-[850px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]">
                        <div class="inline-block relative mt-[10px] mb-[20px]">
                            <span class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"></span>
                            <span class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]">
                                FAQ's
                                <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                                <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                            </span>
                        </div>
                        <h2 class="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]">
                            Do You Have Questions? We Have Answers (Well, Most of the Time!)
                        </h2>
                    </div>
                    <div class="toc-accordion mx-auto md:max-w-[738px]" id="tablesOfContentAccordion">
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button open text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                What is Trezo?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px]" style="display: block;">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                            </div>
                        </div>
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                What features does Trezo offer?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                                <ul class="list-disc ltr:pl-[17px] rtl:pr-[17px]">
                                    <li class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0">
                                        Pellentesque viverra lorem malesuada nunc tristique sapien.
                                    </li>
                                    <li class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0">
                                        Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
                                    </li>
                                    <li class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0">
                                        Tellus non morbi nascetur cursus etiam facilisis mi.
                                    </li>
                                    <li class="text-gray-500 dark:text-gray-400 leading-[1.6] mb-[7px] last:mb-0">
                                        Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                How can Trezo benefit my team?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                            </div>
                        </div>
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                Is Trezo suitable for small businesses?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                            </div>
                        </div>
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                Can I customize Trezo to fit my team's specific needs?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                            </div>
                        </div>
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                Is Trezo cloud-based or on-premises?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                            </div>
                        </div>
                        <div class="toc-accordion-item bg-white dark:bg-[#0c1427] rounded-md text-black dark:text-white mb-[15px] last:mb-0">
                            <button class="toc-accordion-button text-base md:text-[15px] lg:text-md py-[13px] px-[20px] md:px-[25px] block w-full ltr:text-left rtl:text-right font-medium relative" type="button">
                                Does Trezo integrate with other tools?
                                <i class="ri-arrow-down-s-line absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] md:ltr:right-[25px] md:rtl:left-[25px] text-[20px]"></i>
                            </button>
                            <div class="toc-accordion-collapse px-[20px] md:px-[25px] pb-[20px] hidden">
                                <p class="text-gray-500 dark:text-gray-400 !leading-[1.7]">
                                    Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End FAQ -->

            <!-- Contact -->
            <div class="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[150px] relative z-[2]">
                <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
                        <div class="p-[15px] md:p-[20px] lg:py-[30px] lg:px-[20px] rounded-[7px] ltr:xl:mr-[50px] rtl:xl:ml-[50px] bg-white/[.31] dark:bg-black/[.54] border border-white/[.13] dark:border-black/[.13] backdrop-blur-[5.099999904632568px]">
                            <img src="/assets/images/front-pages/contact.jpg" alt="contact-image" class="rounded-[7px]">
                        </div>
                        <div>
                            <div class="mb-[25px] md:mb-[30px] lg:mb-[35px] xl:mb-[40px] md:max-w-[540px] lg:max-w-full">
                                <div class="inline-block relative mt-[10px] mb-[20px]">
                                    <span class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"></span>
                                    <span class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"></span>
                                    <span class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]">
                                        Contact Us
                                        <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                                        <span class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"></span>
                                    </span>
                                </div>
                                <h2 class="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]">
                                    How Can We Help? We Love to Hear From You. Send Us a Message!
                                </h2>
                            </div>
                            <form>
                                <div class="mb-[20px] md:mb-[25px]">
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Full Name
                                    </label>
                                    <input type="text" class="h-[50px] md:h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-gray-50 dark:bg-[#0a0e19] px-[15px] md:px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="Your full name">
                                </div>
                                <div class="mb-[20px] md:mb-[25px]">
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Email Address
                                    </label>
                                    <input type="email" class="h-[50px] md:h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-gray-50 dark:bg-[#0a0e19] px-[15px] md:px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="Your email address">
                                </div>
                                <div class="mb-[20px] md:mb-[25px]">
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Phone Number
                                    </label>
                                    <input type="text" class="h-[50px] md:h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-gray-50 dark:bg-[#0a0e19] px-[15px] md:px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="Your phone number">
                                </div>
                                <div class="mb-[20px] md:mb-[25px]">
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Message
                                    </label>
                                    <textarea class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-gray-50 dark:bg-[#0a0e19] p-[15px] md:p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="Write your message..."></textarea>
                                </div>
                                <button type="submit" class="block w-full lg:text-[15px] xl:text-[16px] py-[12px] px-[17px] bg-primary-600 text-white rounded-md transition-all font-medium hover:bg-primary-500">
                                    <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                                        <i class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                                            autorenew
                                        </i>
                                        Send
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Contact -->
            
            <!-- CTA -->
            <div class="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[150px]">
                <div class="container md:max-w-[960px] 2xl:max-w-[1320px] mx-auto px-[12px] relative z-[1]">
                    <div class="text-center mx-auto md:max-w-[680px] lg:max-w-[830px]">
                        <h2 class="!text-[28px] md:!text-[36px] lg:!text-[45px] xl:!text-[48px] !mb-[13px] md:!mb-[20px] lg:!mb-[25px] xl:!mb-[35px] -tracking-[.5px] md:-tracking-[.8px] lg:-tracking-[1.2px] xl:-tracking-[1.5px] !leading-[1.2]">
                            Unlock a world of possibilities with Trezo Dashboard.
                        </h2>
                        <p class="mx-auto !leading-[1.6] md:max-w-[650px] lg:max-w-[680px] xl:max-w-[740px] md:text-[15px] lg:text-[16px] xl:text-lg xl:tracking-[.2px]">
                            Experience the difference with Trezo Dashboard. Sign up for a free trial today and see how our intuitive platform can revolutionize your data analysis process.
                        </p>
                        <a href="/" class="inline-block lg:text-[15px] xl:text-[16px] mt-[5px] md:mt-[10px] lg:mt-[20px] xl:mt-[30px] py-[12px] px-[17px] bg-purple-600 text-white rounded-md transition-all font-medium hover:bg-purple-500">
                            <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ltr:md:pl-[29px] rtl:md:pr-[29px]">
                                <i class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 !text-[20px] md:!text-[24px]">
                                    person
                                </i>
                                Get started - It is free
                            </span>
                        </a>
                    </div>
                    <div class="absolute ltr:left-[10px] rtl:right-[10px] -top-[200px] -z-[1] blur-[150px]">
                        <img src="/assets/images/front-pages/shape1.png" alt="shape1">
                    </div>
                    <div class="absolute ltr:right-[25px] rtl:left-[25px] top-[150px] -z-[1] blur-[125px] hidden md:block">
                        <img src="/assets/images/front-pages/shape2.png" alt="shape1">
                    </div>
                </div>
            </div>
            <!-- End CTA -->

        @include('partials.front.footer')


        @include('partials.front.scripts')
    </body>
</html>

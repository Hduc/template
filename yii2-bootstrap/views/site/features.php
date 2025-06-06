<?php

/** @var yii\web\View $this */

$this->title = 'Features | Trezo - Yii2 & Bootstrap 5 Admin Dashboard Template';
?>

<!-- Start Banner Area -->
<div class="page-banner-area" id="home">
    <div class="container position-relative z-1">
        <div class="banner-content text-center mb-0">
            <h1 class="fs-60 mb-0">Features</h1>
        </div>

        <img src="<?= Yii::$app->request->baseUrl ?>images/landing/shape-5.png" class="shape-5" alt="shape">
        <img src="<?= Yii::$app->request->baseUrl ?>images/landing/shape-6.png" class="shape-6" alt="shape">
    </div>
</div>
<!-- End Banner Area -->

<!-- Start Key Features Area -->
<div class="key-features-area pt-150 pb-125 position-relative z-2" id="features">
    <div class="container">
        <div class="section-title">
            <span class="top-title">
                <span>Key Features</span>
            </span>
            <h2>Discover What Sets Us Apart: Highlighted Dashboard Functions</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="key-features-single-item">
                    <i class="material-symbols-outlined wh-87 bg-primary bg-opacity-25 d-inline-block text-primary">stacks</i>
                    <h3>Real-Time Updates</h3>
                    <p>Provide real-time updates and notifications to keep users informed about important events, changes, or updates within the system.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="key-features-single-item">
                    <i class="material-symbols-outlined wh-87 bg-primary-div bg-opacity-25 d-inline-block text-primary-div">frame_source</i>
                    <h3>Quality Code</h3>
                    <p>These features include adherence to coding standards, robust error handling mechanisms, efficient algorithms, scalability, maintainability, and readability.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="key-features-single-item">
                    <i class="material-symbols-outlined wh-87 bg-danger bg-opacity-25 d-inline-block text-danger">support_agent</i>
                    <h3>24/7 Customer Support</h3>
                    <p>Our 24/7 customer support is dedicated to providing round-the-clock assistance, ensuring that help is always available whenever our customers need it.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Key Features Area -->

<!-- End Our Team Area -->
<div class="our-team-area position-relative z-1" id="ourteam">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 mb-lg-5">
            <div class="section-title ms-0 text-start mw-630 mb-0">
                <span class="top-title">
                    <span>Our Team</span>
                </span>
                <h2>Introducing Our Exceptional Team. Meet the Minds Driving Our Success</h2>
            </div>

            <div class="team-controller d-flex gap-3">
                <div class="controller-icon prev">
                    <i class="ri-arrow-left-line"></i>
                </div>
                <div class="controller-icon next">
                    <i class="ri-arrow-right-line"></i>
                </div>
            </div>
        </div>
        
        <div class="swiper team-slide">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="our-team-single-item">
                        <div class="team-img">
                            <img src="<?= Yii::$app->request->baseUrl ?>images/landing/team-1.jpg" alt="team">
                        </div>
                        <div class="team-content d-flex justify-content-between align-items-center">
                            <div>
                                <h3>Michael Johnson</h3>
                                <span>CEO</span>
                            </div>
                            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="our-team-single-item">
                        <div class="team-img">
                            <img src="<?= Yii::$app->request->baseUrl ?>images/landing/team-2.jpg" alt="team">
                        </div>
                        <div class="team-content d-flex justify-content-between align-items-center">
                            <div>
                                <h3>Emily Davis</h3>
                                <span>Project Manager</span>
                            </div>
                            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="our-team-single-item">
                        <div class="team-img">
                            <img src="<?= Yii::$app->request->baseUrl ?>images/landing/team-3.jpg" alt="team">
                        </div>
                        <div class="team-content d-flex justify-content-between align-items-center">
                            <div>
                                <h3>Daniel Lee</h3>
                                <span>Sales Team Lead</span>
                            </div>
                            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="our-team-single-item">
                        <div class="team-img">
                            <img src="<?= Yii::$app->request->baseUrl ?>images/landing/team-1.jpg" alt="team">
                        </div>
                        <div class="team-content d-flex justify-content-between align-items-center">
                            <div>
                                <h3>Michael Johnson</h3>
                                <span>CEO</span>
                            </div>
                            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="our-team-single-item">
                        <div class="team-img">
                            <img src="<?= Yii::$app->request->baseUrl ?>images/landing/team-2.jpg" alt="team">
                        </div>
                        <div class="team-content d-flex justify-content-between align-items-center">
                            <div>
                                <h3>Emily Davis</h3>
                                <span>Project Manager</span>
                            </div>
                            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="our-team-single-item">
                        <div class="team-img">
                            <img src="<?= Yii::$app->request->baseUrl ?>images/landing/team-3.jpg" alt="team">
                        </div>
                        <div class="team-content d-flex justify-content-between align-items-center">
                            <div>
                                <h3>Daniel Lee</h3>
                                <span>Sales Team Lead</span>
                            </div>
                            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" class="text-decoration-none fs-20 text-primary">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <img src="<?= Yii::$app->request->baseUrl ?>images/landing/shape-1.png" class="shape shape-3" alt="shape">
    <img src="<?= Yii::$app->request->baseUrl ?>images/landing/shape-2.png" class="shape shape-4" alt="shape">
</div>
<!-- End Our Team Area -->

<!-- Start Unlock Area -->
<div class="unlock-area ptb-150 position-relative z-1" id="admin">
    <div class="container">
        <div class="border-bottom pb-150">
            <div class="row">
                <div class="unlock-content">
                    <h2>Unlock a world of possibilities with Trezo Dashboard.</h2>
                    <p>Experience the difference with Trezo Dashboard. Sign up for a free trial today and see how our intuitive platform can revolutionize your data analysis process.</p>
                    <a href="contact" class="btn btn-primary-div py-2 px-4 fs-16 fw-medium rounded-3 text-white">
                        <i class="ri-user-line fs-18"></i>
                        <span class="ms-1">Get started - It is free</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <img src="<?= Yii::$app->request->baseUrl ?>images/landing/shape-1.png" class="shape shape-5" alt="shape">
    <img src="<?= Yii::$app->request->baseUrl ?>images/landing/shape-2.png" class="shape shape-6" alt="shape">
</div>
<!-- End Unlock Area -->

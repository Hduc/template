<?php

/** @var yii\web\View $this */

$this->title = 'Faqs | Trezo - Yii2 & Bootstrap 5 Admin Dashboard Template';
?>

<!-- Start Banner Area -->
<div class="page-banner-area" id="home">
    <div class="container position-relative z-1">
        <div class="banner-content text-center mb-0">
            <h1 class="fs-60 mb-0">Frequently Asked Questions</h1>
        </div>

        <img src="<?= Yii::$app->request->baseUrl ?>/images/landing/shape-5.png" class="shape-5" alt="shape">
        <img src="<?= Yii::$app->request->baseUrl ?>/images/landing/shape-6.png" class="shape-6" alt="shape">
    </div>
</div>
<!-- End Banner Area -->

<!-- Start FAQ Area -->
<div class="faq-arae position-relative z-1 pt-150 pt-125" id="fqss">
    <div class="container">
        <div class="section-title mw-630">
            <span class="top-title">
                <span>FAQ’s</span>
            </span>
            <h2>Inspiring Feedback: What Users Love About Trezo Dashboard</h2>
        </div>

        <div class="accordion faq-wrapper mw-740 m-auto" id="accordionExample">
            <div class="accordion-item mb-3 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is Trezo?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item mb-3 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What features does Trezo offer?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item mb-3 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How can Trezo benefit my team?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item mb-3 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4">
                        Is Trezo suitable for small businesses?
                    </button>
                </h2>
                <div id="collapseThree4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item mb-3 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5">
                        Can I customize Trezo to fit my team's specific needs?
                    </button>
                </h2>
                <div id="collapseThree5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item mb-3 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree6" aria-expanded="false" aria-controls="collapseThree6">
                        Is Trezo cloud-based or on-premises?
                    </button>
                </h2>
                <div id="collapseThree6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item mb-0 border-0 bg-white">
                <h2 class="accordion-header">
                    <button class="accordion-button text-secondary bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree7" aria-expanded="false" aria-controls="collapseThree7">
                        Does Trezo integrate with other tools?
                    </button>
                </h2>
                <div id="collapseThree7" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Trezo is a comprehensive project management software designed to help teams streamline their workflow, collaborate effectively, and achieve project success.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End FAQ Area -->

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

    <img src="<?= Yii::$app->request->baseUrl ?>/images/landing/shape-1.png" class="shape shape-5" alt="shape">
    <img src="<?= Yii::$app->request->baseUrl ?>/images/landing/shape-2.png" class="shape shape-6" alt="shape">
</div>
<!-- End Unlock Area -->
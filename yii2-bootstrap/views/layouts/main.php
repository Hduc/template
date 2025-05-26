<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\AppAsset;
use app\widgets\Alert;
use yii\bootstrap5\Breadcrumbs;
use yii\bootstrap5\Html;
use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;

AppAsset::register($this);

$this->registerCsrfMetaTags();
$this->registerMetaTag(['charset' => Yii::$app->charset], 'charset');
$this->registerMetaTag(['name' => 'viewport', 'content' => 'width=device-width, initial-scale=1, shrink-to-fit=no']);
$this->registerMetaTag(['name' => 'description', 'content' => $this->params['meta_description'] ?? '']);
$this->registerMetaTag(['name' => 'keywords', 'content' => $this->params['meta_keywords'] ?? '']);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title><?= Html::encode($this->title) ?></title>
        <link rel="icon" type="image/png" href="<?= Yii::$app->request->baseUrl ?>/images/favicon.png">
        <?php $this->head() ?>
    </head>
    <body data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <?php $this->beginBody() ?>

        <?= $this->render('_preloader') ?>

        <?php
        // Hide navbar and footer only for login and register pages
        $hideNavbarFooterPages = ['login', 'register'];
        if (!in_array($this->context->action->id, $hideNavbarFooterPages)): ?>
            <?= $this->render('frontpage/_navbar') ?>
        <?php endif; ?>

        <?= Alert::widget() ?>
        <?= $content ?>
        
        <?php if (!in_array($this->context->action->id, $hideNavbarFooterPages)): ?>
            <?= $this->render('frontpage/_footer') ?>
        <?php endif; ?>


        <button type="button" id="backtotop"> 
			<i class="ri-arrow-up-s-line"></i>
		</button>

        <button class="switch-toggle settings-btn dark-btn p-0 bg-transparent position-absolute top-0 d-none" id="switch-toggle">
            <span class="dark"><i class="material-symbols-outlined">light_mode</i></span> 
            <span class="light"><i class="material-symbols-outlined">dark_mode</i></span>
        </button>

        <?php $this->endBody() ?>
    </body>
</html>
<?php $this->endPage() ?>

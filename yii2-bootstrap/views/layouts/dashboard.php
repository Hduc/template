<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\AppAsset;
use yii\bootstrap5\Html;

AppAsset::register($this);

$this->registerCsrfMetaTags();
$this->registerMetaTag(['charset' => Yii::$app->charset], 'charset');
$this->registerMetaTag(['name' => 'viewport', 'content' => 'width=device-width, initial-scale=1, shrink-to-fit=no']);
$this->registerMetaTag(['name' => 'description', 'content' => $this->params['meta_description'] ?? '']);
$this->registerMetaTag(['name' => 'keywords', 'content' => $this->params['meta_keywords'] ?? '']);
$this->registerLinkTag(['rel' => 'icon', 'type' => 'image/x-icon', 'href' => Yii::getAlias('@web/favicon.ico')]);

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?= Html::encode($this->title) ?> - Dashboard</title>
    <link rel="icon" type="image/png" href="<?= Yii::$app->request->baseUrl ?>/images/favicon.png">
    <?php $this->head() ?>
</head>
<body class="boxed-size">
    <?php $this->beginBody() ?>

    <?= $this->render('_preloader') ?>

    <!-- Sidebar -->
    <?= $this->render('dashboard/_sidebar') ?>

    <!-- Main Content -->
    <div class="container-fluid">
        <div class="main-content d-flex flex-column">
            <?= $this->render('dashboard/_navbar') ?>
            <?= $content ?>
            <div class="flex-grow-1"></div>
            <!-- Footer -->
            <?= $this->render('dashboard/_footer') ?>
        </div>
    </div>

   <?= $this->render('_settings') ?>

    <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
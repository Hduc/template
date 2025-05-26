<?php
$cakeDescription = 'Dashboard | Trezo - CakePHP & Bootstrap 5 Admin Dashboard Template';
?>
<!DOCTYPE html>
<html>
    <head>
        <?= $this->Html->charset() ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>
            <?= $cakeDescription ?>:
            <?= $this->fetch('title') ?>
        </title>
        <?= $this->Html->meta('icon', 'img/favicon.png', ['type' => 'image/png']) ?>

        <?= $this->Html->css(
            [
                'sidebar-menu', 
                'simplebar', 
                'apexcharts', 
                'prism', 
                'rangeslider', 
                'quill.snow', 
                'google-icon', 
                'remixicon', 
                'swiper-bundle.min', 
                'fullcalendar.main', 
                'jsvectormap.min', 
                'lightpick', 
                'style'
            ]
        ) ?>

        <?= $this->fetch('meta') ?>
        <?= $this->fetch('css') ?>
        <?= $this->fetch('script') ?>
    </head>
    <body class="boxed-size">

        <?= $this->element('preloader') ?>
        <?= $this->element('dashboard/sidebar') ?>
        
        <div class="container-fluid">
            <div class="main-content d-flex flex-column">
                <?= $this->element('dashboard/navbar') ?>
                <?= $this->Flash->render() ?>
                <?= $this->fetch('content') ?>
                <div class="flex-grow-1"></div>
                <?= $this->element('dashboard/footer') ?>
            </div>
        </div>

        <?= $this->element('theme-settings') ?>

        <?= $this->Html->script(
            [
                'bootstrap.bundle.min', 
                'sidebar-menu', 
                'dragdrop', 
                'rangeslider.min', 
                'quill.min', 
                'data-table', 
                'prism', 
                'clipboard.min', 
                'feather.min', 
                'simplebar.min', 
                'apexcharts.min', 
                'echarts', 
                'swiper-bundle.min', 
                'fullcalendar.main', 
                'jsvectormap.min', 
                'world-merc', 
                'moment.min', 
                'lightpick', 
                'custom/apexcharts', 
                'custom/echarts', 
                'custom/custom'
            ]
        )?>
    </body>
</html>

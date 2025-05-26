<?php
$cakeDescription = 'Auth | Trezo - CakePHP & Bootstrap 5 Admin Dashboard Template';
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
        
        <?= $this->Flash->render() ?>
        <?= $this->fetch('content') ?>
        
        <button class="theme-settings-btn p-0 border-0 bg-transparent position-absolute" style="right: 30px; bottom: 30px;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <i class="material-symbols-outlined bg-primary wh-35 lh-35 text-white rounded-1" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Click On Theme Settings">settings</i>
        </button>

        <?= $this->element('theme-settings') ?>

        <button class="switch-toggle settings-btn dark-btn p-0 bg-transparent position-absolute top-0 d-none" id="switch-toggle">
            <span class="dark"><i class="material-symbols-outlined">light_mode</i></span> 
            <span class="light"><i class="material-symbols-outlined">dark_mode</i></span>
        </button>

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

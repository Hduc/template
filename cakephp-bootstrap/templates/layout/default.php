<?php
$cakeDescription = 'Trezo - CakePHP & Bootstrap 5 Admin Dashboard Template';
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
    <body 
        data-bs-spy="scroll"
		data-bs-target="#navbar-example2"
		data-bs-root-margin="0px 0px -40%"
		data-bs-smooth-scroll="true"
		class="scrollspy-example"
		tabindex="0"
    >

        <?= $this->element('preloader') ?>
        <?= $this->element('frontend/navbar') ?>
        <?= $this->Flash->render() ?>
        <?= $this->fetch('content') ?>
        <?= $this->element('frontend/footer') ?>


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

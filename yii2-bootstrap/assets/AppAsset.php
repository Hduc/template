<?php
/**
 * @link https://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license https://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/sidebar-menu.css',
        'css/simplebar.css',
        'css/apexcharts.css',
        'css/prism.css',
        'css/rangeslider.css',
        'css/quill.snow.css',
        'css/google-icon.css',
        'css/remixicon.css',
        'css/swiper-bundle.min.css',
        'css/fullcalendar.main.css',
        'css/jsvectormap.min.css',
        'css/lightpick.css',
        'css/style.css',
    ];
    public $js = [
        'js/bootstrap.bundle.min.js',
        'js/sidebar-menu.js',
        'js/dragdrop.js',
        'js/rangeslider.min.js',
        'js/quill.min.js',
        'js/data-table.js',
        'js/prism.js',
        'js/clipboard.min.js',
        'js/feather.min.js',
        'js/simplebar.min.js',
        'js/apexcharts.min.js',
        'js/echarts.js',
        'js/swiper-bundle.min.js',
        'js/fullcalendar.main.js',
        'js/jsvectormap.min.js',
        'js/world-merc.js',
        'js/moment.min.js',
        'js/lightpick.js',
        'js/custom/apexcharts.js',
        'js/custom/echarts.js',
        'js/custom/custom.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap5\BootstrapAsset'
    ];
}

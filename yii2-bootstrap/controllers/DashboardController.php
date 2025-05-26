<?php

namespace app\controllers;

use yii\web\Controller;

class DashboardController extends Controller
{
    public $layout = 'dashboard';
    public function actionIndex()
    {
        return $this->render('index');
    }
    public function actionCrm()
    {
        return $this->render('crm');
    }
    public function actionProjectManagement()
    {
        return $this->render('project-management');
    }
    public function actionLms()
    {
        return $this->render('lms');
    }
    public function actionHelpDesk()
    {
        return $this->render('help-desk');
    }
}
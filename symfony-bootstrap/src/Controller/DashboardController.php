<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class DashboardController extends AbstractController
{
    #[Route('/', name: 'dashboard_home')]
    public function ecommarce(): Response
    {
        return $this->render('dashboard/ecommarce.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/crm', name: 'dashboard_crm')]
    public function crm(): Response
    {
        return $this->render('dashboard/crm.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/project-management', name: 'dashboard_project_management')]
    public function project_management(): Response
    {
        return $this->render('dashboard/project-management.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/lms', name: 'lms_dashboard')]
    public function lms(): Response
    {
        return $this->render('dashboard/lms.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/help-desk', name: 'help_desk_dashboard')]
    public function help_desk(): Response
    {
        return $this->render('dashboard/help-desk.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/analytics', name: 'analytics_dashboard')]
    public function analytics(): Response
    {
        return $this->render('dashboard/analytics.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/crypto', name: 'crypto_dashboard')]
    public function crypto(): Response
    {
        return $this->render('dashboard/crypto.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/sales', name: 'sales_dashboard')]
    public function sales(): Response
    {
        return $this->render('dashboard/sales.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/hospital', name: 'hospital_dashboard')]
    public function hospital(): Response
    {
        return $this->render('dashboard/hospital.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/marketing', name: 'marketing_dashboard')]
    public function marketing(): Response
    {
        return $this->render('dashboard/marketing.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/nft', name: 'nft_dashboard')]
    public function nft(): Response
    {
        return $this->render('dashboard/nft.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/saas', name: 'saas_dashboard')]
    public function saas(): Response
    {
        return $this->render('dashboard/saas.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/real-estate', name: 'real_estate_dashboard')]
    public function real_estate(): Response
    {
        return $this->render('dashboard/real-estate.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/shipment', name: 'shipment_dashboard')]
    public function shipment(): Response
    {
        return $this->render('dashboard/shipment.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/finance', name: 'finance_dashboard')]
    public function finance(): Response
    {
        return $this->render('dashboard/finance.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/hrm', name: 'hrm_dashboard')]
    public function hrm(): Response
    {
        return $this->render('dashboard/hrm.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/school', name: 'school_dashboard')]
    public function school(): Response
    {
        return $this->render('dashboard/school.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/call-center', name: 'call_center_dashboard')]
    public function call_center(): Response
    {
        return $this->render('dashboard/call-center.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/pos-system', name: 'pos_system_dashboard')]
    public function pos_system(): Response
    {
        return $this->render('dashboard/pos-system.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/podcast', name: 'podcast_dashboard')]
    public function podcast(): Response
    {
        return $this->render('dashboard/podcast.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
}
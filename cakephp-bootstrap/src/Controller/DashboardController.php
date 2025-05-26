<?php
declare(strict_types=1);

namespace App\Controller;


class DashboardController extends AppController
{
    public function beforeFilter(\Cake\Event\EventInterface $event): void
    {
        parent::beforeFilter($event);

        // Set a custom layout that doesn't include navbar/footer
        $this->viewBuilder()->setLayout('dashboard_layout');
    }

    public function ecommerce(): void
    {
        // Login logic or view rendering
    }

    public function crm(): void
    {
        // Registration logic
    }

    public function projectManagemnt(): void
    {
        // Reset password logic
    }

    public function lms(): void
    {
        // Reset password logic
    }

    public function helpDesk(): void
    {
        // Reset password logic
    }
    public function analytics(): void
    {
        // Reset password logic
    }
    public function crypto(): void
    {
        // Reset password logic
    }
    public function sales(): void
    {
        // Reset password logic
    }
    public function hospital(): void
    {
        // Reset password logic
    }
    public function marketing(): void
    {
        // Reset password logic
    }
    public function nft(): void
    {
        // Reset password logic
    }
    public function saas(): void
    {
        // Reset password logic
    }
    public function realEstate(): void
    {
        // Reset password logic
    }
    public function shipment(): void
    {
        // Reset password logic
    }
    public function finance(): void
    {
        // Reset password logic
    }
    public function hrm(): void
    {
        // Reset password logic
    }
    public function school(): void
    {
        // Reset password logic
    }
    public function callCenter(): void
    {
        // Reset password logic
    }
}
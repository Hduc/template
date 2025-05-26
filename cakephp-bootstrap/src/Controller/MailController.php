<?php
declare(strict_types=1);

namespace App\Controller;


class MailController extends AppController
{
    public function beforeFilter(\Cake\Event\EventInterface $event): void
    {
        parent::beforeFilter($event);

        // Set a custom layout that doesn't include navbar/footer
        $this->viewBuilder()->setLayout('dashboard_layout');
    }

    public function compose(): void
    {
        // Login logic or view rendering
    }
    public function inbox(): void
    {
        // Login logic or view rendering
    }
    public function readEmail(): void
    {
        // Login logic or view rendering
    }
    public function starred(): void
    {
        // Login logic or view rendering
    }
    public function snoozed(): void
    {
        // Login logic or view rendering
    }
    public function sentMail(): void
    {
        // Login logic or view rendering
    }
    public function draft(): void
    {
        // Login logic or view rendering
    }
    public function important(): void
    {
        // Login logic or view rendering
    }
    public function spam(): void
    {
        // Login logic or view rendering
    }
    
    public function trashEmail(): void
    {
        // Login logic or view rendering
    }
    
}
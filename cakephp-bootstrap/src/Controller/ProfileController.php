<?php
declare(strict_types=1);

namespace App\Controller;


class ProfileController extends AppController
{
    public function beforeFilter(\Cake\Event\EventInterface $event): void
    {
        parent::beforeFilter($event);

        // Set a custom layout that doesn't include navbar/footer
        $this->viewBuilder()->setLayout('dashboard_layout');
    }

    public function myProfile(): void
    {
        // Login logic or view rendering
    }
    public function toDoList(): void
    {
        // Login logic or view rendering
    }
    public function calendar(): void
    {
        // Login logic or view rendering
    }
    public function contacts(): void
    {
        // Login logic or view rendering
    }
    public function chat(): void
    {
        // Login logic or view rendering
    }
}
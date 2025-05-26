<?php
declare(strict_types=1);

namespace App\Controller;


class AuthController extends AppController
{
    public function beforeFilter(\Cake\Event\EventInterface $event): void
    {
        parent::beforeFilter($event);

        // Set a custom layout that doesn't include navbar/footer
        $this->viewBuilder()->setLayout('auth_layout');
    }

    public function login(): void
    {
        // Login logic or view rendering
    }

    public function register(): void
    {
        // Registration logic
    }

    public function forgetPassword(): void
    {
        // Reset password logic
    }

    public function resetPassword(): void
    {
        // Reset password logic
    }

    public function lockScreen(): void
    {
        // Reset password logic
    }
    public function logout(): void
    {
        // Reset password logic
    }
    public function confirmMail(): void
    {
        // Reset password logic
    }
}
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PageController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        return $this->render('page/home.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }
    #[Route('/contact', name: 'contact_page')]
    public function contact(): Response
    {
        return $this->render('page/contact.html.twig');
    }
    #[Route('/features', name: 'features_page')]
    public function features(): Response
    {
        return $this->render('page/features.html.twig');
    }
    #[Route('/our-team', name: 'our_team_page')]
    public function our_team(): Response
    {
        return $this->render('page/our-team.html.twig');
    }
    #[Route('/faqs', name: 'faqs_page')]
    public function faqs(): Response
    {
        return $this->render('page/faqs.html.twig');
    }
    #[Route('/login', name: 'login_page')]
    public function login(): Response
    {
        return $this->render('page/login.html.twig');
    }
    #[Route('/register', name: 'register_page')]
    public function register(): Response
    {
        return $this->render('page/register.html.twig');
    }
    #[Route('/forget-password', name: 'forget_password_page')]
    public function forget_password(): Response
    {
        return $this->render('page/forget-password.html.twig');
    }
}

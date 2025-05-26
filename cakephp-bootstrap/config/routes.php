<?php
/**
 * Routes configuration.
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * It's loaded within the context of `Application::routes()` method which
 * receives a `RouteBuilder` instance `$routes` as method argument.
 *
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Routing\Route\DashedRoute;
use Cake\Routing\RouteBuilder;

/*
 * This file is loaded in the context of the `Application` class.
 * So you can use `$this` to reference the application class instance
 * if required.
 */
return function (RouteBuilder $routes): void {
    /*
     * The default class to use for all routes
     *
     * The following route classes are supplied with CakePHP and are appropriate
     * to set as the default:
     *
     * - Route
     * - InflectedRoute
     * - DashedRoute
     *
     * If no call is made to `Router::defaultRouteClass()`, the class used is
     * `Route` (`Cake\Routing\Route\Route`)
     *
     * Note that `Route` does not do any inflections on URLs which will result in
     * inconsistently cased URLs when used with `{plugin}`, `{controller}` and
     * `{action}` markers.
     */
    $routes->setRouteClass(DashedRoute::class);

    $routes->scope('/', function (RouteBuilder $builder): void {
        /*
         * Here, we are connecting '/' (base path) to a controller called 'Pages',
         * its action called 'display', and we pass a param to select the view file
         * to use (in this case, templates/Pages/home.php)...
         */
        $builder->connect('/', ['controller' => 'Pages', 'action' => 'display', 'home']);
        $builder->connect('/features', ['controller' => 'Pages', 'action' => 'display', 'features']);
        $builder->connect('/our_team', ['controller' => 'Pages', 'action' => 'display', 'our_team']);
        $builder->connect('/faqs', ['controller' => 'Pages', 'action' => 'display', 'faqs']);
        $builder->connect('/contact', ['controller' => 'Pages', 'action' => 'display', 'contact']);


        $builder->connect('/auth/login', ['controller' => 'Auth', 'action' => 'login']);
        $builder->connect('/auth/register', ['controller' => 'Auth', 'action' => 'register']);
        $builder->connect('/auth/forget-password', ['controller' => 'Auth', 'action' => 'forgetPassword']);
        $builder->connect('/auth/reset-password', ['controller' => 'Auth', 'action' => 'resetPassword']);
        $builder->connect('/auth/lock-screen', ['controller' => 'Auth', 'action' => 'lockScreen']);
        $builder->connect('/auth/logout', ['controller' => 'Auth', 'action' => 'logout']);
        $builder->connect('/auth/confirm-mail', ['controller' => 'Auth', 'action' => 'confirmMail']);

        $builder->connect('/dashboard', ['controller' => 'Dashboard', 'action' => 'ecommerce']);
        $builder->connect('/dashboard/crm', ['controller' => 'Dashboard', 'action' => 'crm']);
        $builder->connect('/dashboard/project-management', ['controller' => 'Dashboard', 'action' => 'projectManagemnt']);
        $builder->connect('/dashboard/lms', ['controller' => 'Dashboard', 'action' => 'lms']);
        $builder->connect('/dashboard/help-desk', ['controller' => 'Dashboard', 'action' => 'helpDesk']);
        $builder->connect('/dashboard/analytics', ['controller' => 'Dashboard', 'action' => 'analytics']);
        $builder->connect('/dashboard/crypto', ['controller' => 'Dashboard', 'action' => 'crypto']);
        $builder->connect('/dashboard/sales', ['controller' => 'Dashboard', 'action' => 'sales']);
        $builder->connect('/dashboard/hospital', ['controller' => 'Dashboard', 'action' => 'hospital']);
        $builder->connect('/dashboard/marketing', ['controller' => 'Dashboard', 'action' => 'marketing']);
        $builder->connect('/dashboard/nft', ['controller' => 'Dashboard', 'action' => 'nft']);
        $builder->connect('/dashboard/saas', ['controller' => 'Dashboard', 'action' => 'saas']);
        $builder->connect('/dashboard/real-estate', ['controller' => 'Dashboard', 'action' => 'realEstate']);
        $builder->connect('/dashboard/shipment', ['controller' => 'Dashboard', 'action' => 'shipment']);
        $builder->connect('/dashboard/finance', ['controller' => 'Dashboard', 'action' => 'finance']);
        $builder->connect('/dashboard/hrm', ['controller' => 'Dashboard', 'action' => 'hrm']);
        $builder->connect('/dashboard/school', ['controller' => 'Dashboard', 'action' => 'school']);
        $builder->connect('/dashboard/call-center', ['controller' => 'Dashboard', 'action' => 'callCenter']);


        $builder->connect('/dashboard/to-do-list', ['controller' => 'Profile', 'action' => 'toDoList']);
        $builder->connect('/dashboard/my-profile', ['controller' => 'Profile', 'action' => 'myProfile']);
        $builder->connect('/dashboard/calendar', ['controller' => 'Profile', 'action' => 'calendar']);
        $builder->connect('/dashboard/contacts', ['controller' => 'Profile', 'action' => 'contacts']);
        $builder->connect('/dashboard/chat', ['controller' => 'Profile', 'action' => 'chat']);


        $builder->connect('/dashboard/compose', ['controller' => 'Mail', 'action' => 'compose']);
        $builder->connect('/dashboard/inbox', ['controller' => 'Mail', 'action' => 'inbox']);
        $builder->connect('/dashboard/read-email', ['controller' => 'Mail', 'action' => 'readEmail']);
        $builder->connect('/dashboard/starred', ['controller' => 'Mail', 'action' => 'starred']);
        $builder->connect('/dashboard/snoozed', ['controller' => 'Mail', 'action' => 'snoozed']);
        $builder->connect('/dashboard/sent-mail', ['controller' => 'Mail', 'action' => 'sentMail']);
        $builder->connect('/dashboard/draft', ['controller' => 'Mail', 'action' => 'draft']);
        $builder->connect('/dashboard/important', ['controller' => 'Mail', 'action' => 'important']);
        $builder->connect('/dashboard/spam', ['controller' => 'Mail', 'action' => 'spam']);
        $builder->connect('/dashboard/trash-email', ['controller' => 'Mail', 'action' => 'trashEmail']);

        /*
         * ...and connect the rest of 'Pages' controller's URLs.
         */
        $builder->connect('/pages/*', 'Pages::display');

        /*
         * Connect catchall routes for all controllers.
         *
         * The `fallbacks` method is a shortcut for
         *
         * ```
         * $builder->connect('/{controller}', ['action' => 'index']);
         * $builder->connect('/{controller}/{action}/*', []);
         * ```
         *
         * It is NOT recommended to use fallback routes after your initial prototyping phase!
         * See https://book.cakephp.org/5/en/development/routing.html#fallbacks-method for more information
         */
        $builder->fallbacks();
    });

    /*
     * If you need a different set of middleware or none at all,
     * open new scope and define routes there.
     *
     * ```
     * $routes->scope('/api', function (RouteBuilder $builder): void {
     *     // No $builder->applyMiddleware() here.
     *
     *     // Parse specified extensions from URLs
     *     // $builder->setExtensions(['json', 'xml']);
     *
     *     // Connect API actions here.
     * });
     * ```
     */
};

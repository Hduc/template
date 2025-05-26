<div class="sidebar-area" id="sidebar-area">
    <div class="logo position-relative">
        <a
            href="/dashboard"
            class="d-block text-decoration-none position-relative"
        >
            <img src="/img/logo-icon.png" alt="logo-icon" />
            <span class="logo-text fw-bold text-dark">Trezo</span>
        </a>
        <button
            class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
            id="sidebar-burger-menu"
        >
            <i data-feather="x"></i>
        </button>
    </div>

    <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu active"
        data-simplebar
    >
        <ul class="menu-inner">
            <li class="menu-title small text-uppercase">
                <span class="menu-title-text">MAIN</span>
            </li>
            <li class="menu-item <?= $this->isActiveController('Dashboard') ? 'open' : '' ?>">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >dashboard</span
                    >
                    <span class="title">Dashboard</span>
                    <span class="count">24</span>
                </a>

                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard" class="menu-link <?= $this->isActive('Dashboard', 'ecommerce') ? 'active' : '' ?>">
                            eCommerce
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/crm" class="menu-link <?= $this->isActive('Dashboard', 'crm') ? 'active' : '' ?>">
                            CRM
                            <span class="new tag">Hot</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/project-management"
                            class="menu-link <?= $this->isActive('Dashboard', 'projectManagemnt') ? 'active' : '' ?>"
                        >
                            Project Management
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/lms" class="menu-link <?= $this->isActive('Dashboard', 'lms') ? 'active' : '' ?>">
                            LMS
                            <span class="new tag">Top</span>
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/help-desk" class="menu-link <?= $this->isActive('Dashboard', 'helpDesk') ? 'active' : '' ?>">
                            HelpDesk
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/analytics" class="menu-link <?= $this->isActive('Dashboard', 'analytics') ? 'active' : '' ?>">
                            Analytics
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/crypto" class="menu-link <?= $this->isActive('Dashboard', 'crypto') ? 'active' : '' ?>">
                            Crypto
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/sales" class="menu-link <?= $this->isActive('Dashboard', 'sales') ? 'active' : '' ?>">
                            Sales
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/hospital" class="menu-link <?= $this->isActive('Dashboard', 'hospital') ? 'active' : '' ?>">
                            Hospital
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/marketing" class="menu-link <?= $this->isActive('Dashboard', 'marketing') ? 'active' : '' ?>">
                            Marketing
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/nft" class="menu-link <?= $this->isActive('Dashboard', 'nft') ? 'active' : '' ?>"> NFT </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/saas" class="menu-link <?= $this->isActive('Dashboard', 'saas') ? 'active' : '' ?>"> SaaS </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/real-estate" class="menu-link <?= $this->isActive('Dashboard', 'realEstate') ? 'active' : '' ?>">
                            Real Estate
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/shipment" class="menu-link <?= $this->isActive('Dashboard', 'shipment') ? 'active' : '' ?>">
                            Shipment
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/finance" class="menu-link <?= $this->isActive('Dashboard', 'finance') ? 'active' : '' ?>">
                            Finance
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/hrm" class="menu-link <?= $this->isActive('Dashboard', 'hrm') ? 'active' : '' ?>"> HRM </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/school" class="menu-link <?= $this->isActive('Dashboard', 'school') ? 'active' : '' ?>">
                            School
                        </a>
                    </li>
                    <li class="menu-item mb-0">
                        <a href="/dashboard/call-center" class="menu-link <?= $this->isActive('Dashboard', 'callCenter') ? 'active' : '' ?>">
                            Call Center
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >note_stack</span
                    >
                    <span class="title">Front Pages</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/" class="menu-link">
                            Home
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/features" class="menu-link">
                            Features
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/our_team" class="menu-link">
                            Our Team
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/faqs" class="menu-link">
                            FAQ’s
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/contact" class="menu-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-title small text-uppercase">
                <span class="menu-title-text">APPS</span>
            </li>

            <li class="menu-item <?= $this->isActiveController('Profile') ? 'open' : '' ?>">
                <a href="/dashboard/to-do-list" class="menu-link <?= $this->isActive('Profile', 'toDoList') ? 'active' : '' ?>">
                    <span class="material-symbols-outlined menu-icon"
                        >format_list_bulleted</span
                    >
                    <span class="title">To Do List</span>
                </a>
            </li>

            <li class="menu-item <?= $this->isActiveController('Profile') ? 'open' : '' ?>">
                <a href="/dashboard/calendar" class="menu-link <?= $this->isActive('Profile', 'calendar') ? 'active' : '' ?>">
                    <span class="material-symbols-outlined menu-icon"
                        >date_range</span
                    >
                    <span class="title">Calendar</span>
                </a>
            </li>

            <li class="menu-item <?= $this->isActiveController('Profile') ? 'open' : '' ?>">
                <a href="/dashboard/contacts" class="menu-link <?= $this->isActive('Profile', 'contacts') ? 'active' : '' ?>">
                    <span class="material-symbols-outlined menu-icon"
                        >contact_page</span
                    >
                    <span class="title">Contacts</span>
                </a>
            </li>

            <li class="menu-item <?= $this->isActiveController('Profile') ? 'open' : '' ?>">
                <a href="/dashboard/chat" class="menu-link <?= $this->isActive('Profile', 'chat') ? 'active' : '' ?>">
                    <span class="material-symbols-outlined menu-icon"
                        >chat</span
                    >
                    <span class="title">Chat</span>
                </a>
            </li>

            <li class="menu-item <?= $this->isActiveController('Mail') ? 'open' : '' ?>">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >mail</span
                    >
                    <span class="title">Email</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/inbox" class="menu-link <?= $this->isActive('Mail', 'inbox') ? 'active' : '' ?>">
                            Inbox
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/compose" class="menu-link <?= $this->isActive('Mail', 'compose') ? 'active' : '' ?>">
                            Compose
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/read-email" class="menu-link <?= $this->isActive('Mail', 'readEmail') ? 'active' : '' ?>">
                            Read Email
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/snoozed" class="menu-link <?= $this->isActive('Mail', 'snoozed') ? 'active' : '' ?>">
                            Snoozed
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/draft" class="menu-link <?= $this->isActive('Mail', 'draft') ? 'active' : '' ?>">
                            Draft
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/sent-mail" class="menu-link <?= $this->isActive('Mail', 'sentMail') ? 'active' : '' ?>">
                            Sent Mail
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/trash-email" class="menu-link <?= $this->isActive('Mail', 'trashEmail') ? 'active' : '' ?>">
                            Trash
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/spam" class="menu-link <?= $this->isActive('Mail', 'spam') ? 'active' : '' ?>"> Spam </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/starred" class="menu-link <?= $this->isActive('Mail', 'starred') ? 'active' : '' ?>">
                            Starred
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/important" class="menu-link <?= $this->isActive('Mail', 'important') ? 'active' : '' ?>">
                            Important
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a href="/dashboard/kanban-board" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >team_dashboard</span
                    >
                    <span class="title">Kanban Board</span>
                </a>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >folder_open</span
                    >
                    <span class="title">File Manager</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/file-manager" class="menu-link">
                            My Drive
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/assets" class="menu-link">
                            Assets
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/projects" class="menu-link">
                            Projects
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/personal" class="menu-link">
                            Personal
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/applications" class="menu-link">
                            Applications
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/documents" class="menu-link">
                            Documents
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/media" class="menu-link">
                            Media
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-title small text-uppercase">
                <span class="menu-title-text">PAGES</span>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >shopping_cart</span
                    >
                    <span class="title">eCommerce</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/products-grid" class="menu-link">
                            Products Grid
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/products-list" class="menu-link">
                            Products List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/product-details"
                            class="menu-link"
                        >
                            Product Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/create-product" class="menu-link">
                            Create Product
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/edit-product" class="menu-link">
                            Edit Product
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/cart" class="menu-link"> Cart </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/checkout" class="menu-link">
                            Checkout
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/orders" class="menu-link">
                            Orders
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/order-details" class="menu-link">
                            Order Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/create-order" class="menu-link">
                            Create Order
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/order-tracking" class="menu-link">
                            Order Tracking
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/customers" class="menu-link">
                            Customers
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/customer-details"
                            class="menu-link"
                        >
                            Customer Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/categories" class="menu-link">
                            Categories
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/sellers" class="menu-link">
                            Sellers
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/seller-details" class="menu-link">
                            Seller Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/create-seller" class="menu-link">
                            Create Seller
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/reviews" class="menu-link">
                            Reviews
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/refunds" class="menu-link">
                            Refunds
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >handshake</span
                    >
                    <span class="title">CRM</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/contacts-2" class="menu-link">
                            Contacts
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/customers-2" class="menu-link">
                            Customers
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/leads" class="menu-link">
                            Leads
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/deals" class="menu-link">
                            Deals
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >description</span
                    >
                    <span class="title">Project Management</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a
                            href="/dashboard/project-overview"
                            class="menu-link"
                        >
                            Project Overview
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/project-list" class="menu-link">
                            Project List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/create-project" class="menu-link">
                            Create Project
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/clients" class="menu-link">
                            Clients
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/teams" class="menu-link">
                            Teams
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/kanban-board-2" class="menu-link">
                            Kanban Board
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/user" class="menu-link"> User </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >auto_stories</span
                    >
                    <span class="title">LMS</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/courses-list" class="menu-link">
                            Courses List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/course-details" class="menu-link">
                            Course Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/lesson-preview" class="menu-link">
                            Lesson Preview
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/create-course" class="menu-link">
                            Create Course
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/edit-course" class="menu-link">
                            Edit Course
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/instructors" class="menu-link">
                            Instructors
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >support</span
                    >
                    <span class="title">Help Desk</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/tickets" class="menu-link">
                            Tickets
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/ticket-details" class="menu-link">
                            Ticket Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/agents" class="menu-link">
                            Agents
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/reports" class="menu-link">
                            Reports
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >store</span
                    >
                    <span class="title">NFT Marketplace</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/marketplace" class="menu-link">
                            Marketplace
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/explore-all" class="menu-link">
                            Explore All
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/live-auction" class="menu-link">
                            Live Auction
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/nft-details" class="menu-link">
                            NFT Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/creators" class="menu-link">
                            Creators
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/creator-details"
                            class="menu-link"
                        >
                            Creator Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/wallet-connect" class="menu-link">
                            Wallet Connect
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >real_estate_agent</span
                    >
                    <span class="title">Real Estate</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a
                            href="/dashboard/real-estate-customers"
                            class="menu-link"
                        >
                            Real Estate Customers
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/property-list" class="menu-link">
                            Property List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/property-overview"
                            class="menu-link"
                        >
                            Property Overview
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/add-property" class="menu-link">
                            Add Property
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/agent-list" class="menu-link">
                            Agent list
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/agent-overview" class="menu-link">
                            Agent Overview
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/add-agent" class="menu-link">
                            Add Agent
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >calculate</span
                    >
                    <span class="title">Finance</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/wallet" class="menu-link">
                            Wallet
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/transaction" class="menu-link">
                            Transaction
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >stethoscope</span
                    >
                    <span class="title">Doctor</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a
                            href="/dashboard/my-patient-list"
                            class="menu-link"
                        >
                            My Patient List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/add-patient" class="menu-link">
                            Add Patient
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/patient-details"
                            class="menu-link"
                        >
                            Patient Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/appointment" class="menu-link">
                            Appointment
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/prescription" class="menu-link">
                            Prescription
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/write-prescription"
                            class="menu-link"
                        >
                            Write Prescription
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >local_activity</span
                    >
                    <span class="title">Events</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/events" class="menu-link">
                            Events
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/events-list" class="menu-link">
                            Events List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/event-details" class="menu-link">
                            Event Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/create-an-event"
                            class="menu-link"
                        >
                            Create An Event
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/edit-an-event" class="menu-link">
                            Edit An Event
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >share</span
                    >
                    <span class="title">Social</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/profile" class="menu-link">
                            Profile
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/settings" class="menu-link">
                            Settings
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >content_paste</span
                    >
                    <span class="title">Invoices</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/invoice-list" class="menu-link">
                            Invoice List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/invoice-details"
                            class="menu-link"
                        >
                            Invoice Details
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/create-invoice" class="menu-link">
                            Create Invoice
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/edit-invoice" class="menu-link">
                            Edit Invoice
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >person</span
                    >
                    <span class="title">Users</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/team-members" class="menu-link">
                            Team Members
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/users-list" class="menu-link">
                            Users List
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="add-user.html" class="menu-link">
                            Add User
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >account_box</span
                    >
                    <span class="title">Profile</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/user-profile" class="menu-link">
                            User Profile
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/teams-2" class="menu-link">
                            Teams
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/my-projects" class="menu-link">
                            Projects
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a href="/dashboard/starter" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >star</span
                    >
                    <span class="title">Starter</span>
                </a>
            </li>

            <li class="menu-title small text-uppercase">
                <span class="menu-title-text">MODULES</span>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >add_reaction</span
                    >
                    <span class="title">Icons</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/material-icons" class="menu-link">
                            Material Icons
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/feathericon" class="menu-link">
                            Feathericon
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/remixicon" class="menu-link">
                            Remixicon
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >qr_code_scanner</span
                    >
                    <span class="title">UI Elements</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/alerts" class="menu-link">
                            Alerts
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/avatar" class="menu-link">
                            Avatar
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/buttons" class="menu-link">
                            Buttons
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/badges" class="menu-link">
                            Badges
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/cards" class="menu-link">
                            Cards
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/carousels" class="menu-link">
                            Carousels
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/dropdowns" class="menu-link">
                            Dropdowns
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/grids" class="menu-link">
                            Grids
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/images" class="menu-link">
                            Images
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/list" class="menu-link"> List </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/modals" class="menu-link">
                            Modals
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/navs" class="menu-link"> Navs </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/paginations" class="menu-link">
                            Pagination's
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/popover-tooltips"
                            class="menu-link"
                        >
                            Popover Tooltips
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/progress" class="menu-link">
                            Progress
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/spinners" class="menu-link">
                            Spinners
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/tabs" class="menu-link"> Tabs </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/accordions" class="menu-link">
                            Accordions
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/date-time-picker"
                            class="menu-link"
                        >
                            Date/Time Picker
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/videos" class="menu-link">
                            Videos
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >table_chart</span
                    >
                    <span class="title">Tables</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/basic-table" class="menu-link">
                            Basic Table
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/downloadable-table"
                            class="menu-link"
                        >
                            Downloadable Table
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/data-tables" class="menu-link">
                            Data Table
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >forum</span
                    >
                    <span class="title">Forms</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/basic-elements" class="menu-link">
                            Basic Elements
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/advanced-elements"
                            class="menu-link"
                        >
                            Advanced Elements
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/validation" class="menu-link">
                            Validation
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/wizard" class="menu-link">
                            Wizard
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/editors" class="menu-link">
                            Editors
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/file-upload" class="menu-link">
                            File Upload
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a href="/dashboard/apex-charts" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >pie_chart</span
                    >
                    <span class="title">Apex Charts</span>
                </a>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >lock_open</span
                    >
                    <span class="title">Authentication</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/auth/login" class="menu-link">
                            Login
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/auth/register" class="menu-link">
                            Register
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/auth/reset-password" class="menu-link">
                            Reset Password
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/auth/forget-password"
                            class="menu-link"
                        >
                            Forget Password
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/auth/lock-screen" class="menu-link">
                            Lock Screen
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/auth/logout" class="menu-link">
                            Log Out
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/auth/confirm-mail" class="menu-link">
                            Confirm Mail
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >content_copy</span
                    >
                    <span class="title">Extra Pages</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/pricing-plan" class="menu-link">
                            Pricing Plan
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/faqs" class="menu-link"> FAQ </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/timeline" class="menu-link">
                            Timeline
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/animation" class="menu-link">
                            Animation
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/clip-board" class="menu-link">
                            Clip Board
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/drag-drop" class="menu-link">
                            Drag & Drop
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/range-slider" class="menu-link">
                            Range Slider
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/ratings" class="menu-link">
                            Ratings
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/toasts" class="menu-link">
                            Toasts
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/check-radio" class="menu-link">
                            Check & Radio
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/select" class="menu-link">
                            Select
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/scrollbar" class="menu-link">
                            Scrollbar
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/typography" class="menu-link">
                            Typography
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/gallery" class="menu-link">
                            Gallery
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/search" class="menu-link">
                            Search
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/blank-page" class="menu-link">
                            Blank Page
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >error</span
                    >
                    <span class="title">Errors</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="/dashboard/404-error-page" class="menu-link">
                            404 Error Page
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/internal-error" class="menu-link">
                            Internal Error
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a href="/dashboard/widgets" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >widgets</span
                    >
                    <span class="title">Widgets</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="/dashboard/google-map" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >map</span
                    >
                    <span class="title">Google Map</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="/dashboard/notification" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >notifications</span
                    >
                    <span class="title">Notification</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="/dashboard/members" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >group</span
                    >
                    <span class="title">Members</span>
                </a>
            </li>

            <li class="menu-title small text-uppercase">
                <span class="menu-title-text">OTHERS</span>
            </li>

            <li class="menu-item <?= $this->isActiveController('Profile') ? 'open' : '' ?>">
                <a href="/dashboard/my-profile" class="menu-link <?= $this->isActive('Profile', 'myProfile') ? 'active' : '' ?>">
                    <span class="material-symbols-outlined menu-icon"
                        >account_circle</span
                    >
                    <span class="title">My Profile</span>
                </a>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >settings</span
                    >
                    <span class="title">Settings</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a
                            href="/dashboard/account-settings"
                            class="menu-link"
                        >
                            Account Settings
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/change-password"
                            class="menu-link"
                        >
                            Change Password
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/connections" class="menu-link">
                            Connections
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/connections" class="menu-link">
                            Connections
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="/dashboard/privacy-policy" class="menu-link">
                            Privacy Policy
                        </a>
                    </li>
                    <li class="menu-item">
                        <a
                            href="/dashboard/terms-conditions"
                            class="menu-link"
                        >
                            Terms & Conditions
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a
                    href="javascript:void(0);"
                    class="menu-link menu-toggle active"
                >
                    <span class="material-symbols-outlined menu-icon"
                        >unfold_more</span
                    >
                    <span class="title">Multi Level Menu</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item after-sub-menu menu-level">
                        <a
                            href="javascript:void(0);"
                            class="menu-link menu-toggle"
                        >
                            <span class="title">Level One</span>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item">
                                <a href="#" class="menu-link">
                                    Level Three
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a href="/auth/logout" class="menu-link">
                    <span class="material-symbols-outlined menu-icon"
                        >logout</span
                    >
                    <span class="title">Logout</span>
                </a>
            </li>
        </ul>
    </aside>
</div>
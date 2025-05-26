export const menuSections = [
	{
		title: 'MAIN',
		items: [
			{
				type: 'group',
				label: 'Dashboard',
				groupKey: 'dashboard',
				icon: 'dashboard',
				count: 20,
				links: [
					{ label: 'eCommerce', path: '/dashboard' },
					{ label: 'CRM', path: '/dashboard/crm' },
					{ label: 'Project Management', path: '/dashboard/project-management' },
					{ label: 'LMS', path: '/dashboard/lms' },
					{ label: 'Help Desk', path: '/dashboard/help-desk' },
					{ label: 'Analytics', path: '/dashboard/analytics' },
					{ label: 'Crypto', path: '/dashboard/crypto' },
					{ label: 'Sales', path: '/dashboard/sales' },
					{ label: 'Hospital', path: '/dashboard/hospital' },
					{ label: 'Marketing', path: '/dashboard/marketing' },
					{ label: 'NFT', path: '/dashboard/nft' },
					{ label: 'SaaS', path: '/dashboard/saas' },
					{ label: 'Real Estate', path: '/dashboard/real-estate' },
					{ label: 'Shipment', path: '/dashboard/shipment' },
					{ label: 'Finance', path: '/dashboard/finance' },
					{ label: 'HRM', path: '/dashboard/hrm' },
					{ label: 'School', path: '/dashboard/school' },
					{ label: 'Call Center', path: '/dashboard/call-center' },
					{ label: 'POS System', path: '/dashboard/pos-system' }
				]
			},
			{
				type: 'group',
				label: 'Front Pages',
				groupKey: 'front-pages',
				icon: 'note_stack',
				links: [
					{ label: 'Home', path: '/' },
					{ label: 'Features', path: '/features' },
					{ label: 'Our Team', path: '/our-team' },
					{ label: 'FAQ’s', path: '/faqs' },
					{ label: 'Contact', path: '/contact' }
				]
			}
		]
	},
	{
		title: 'APPS',
		items: [
			{
				type: 'link',
				label: 'To Do List',
				icon: 'format_list_bulleted',
				path: '/dashboard/apps/to-do-list'
			},
			{
				type: 'link',
				label: 'Calendar',
				icon: 'date_range',
				path: '/dashboard/apps/calendar'
			},
			{
				type: 'link',
				label: 'Contacts',
				icon: 'contact_page',
				path: '/dashboard/apps/contacts'
			},
			{
				type: 'link',
				label: 'Chat',
				icon: 'chat',
				path: '/dashboard/apps/chat'
			},
			{
				type: 'group',
				label: 'Email',
				groupKey: 'email',
				icon: 'mail',
				links: [
					{ label: 'Inbox', path: '/dashboard/apps/email/inbox' },
					{ label: 'Compose', path: '/dashboard/apps/email/compose' },
					{ label: 'Read Email', path: '/dashboard/apps/email/read-email' },
					{ label: 'Snoozed', path: '/dashboard/apps/email/snoozed' },
					{ label: 'Draft', path: '/dashboard/apps/email/draft' },
					{ label: 'Sent Mail', path: '/dashboard/apps/email/sent-mail' },
					{ label: 'Trash', path: '/dashboard/apps/email/trash' },
					{ label: 'Spam', path: '/dashboard/apps/email/spam' },
					{ label: 'Starred', path: '/dashboard/apps/email/starred' },
					{ label: 'Important', path: '/dashboard/apps/email/important' }
				]
			},
			{
				type: 'link',
				label: 'Kanban Board',
				icon: 'team_dashboard',
				path: '/dashboard/apps/kanban-board'
			},
			{
				type: 'group',
				label: 'File Manager',
				groupKey: 'file-manager',
				icon: 'folder_open',
				links: [
					{ label: 'My Drive', path: '/dashboard/apps/file-manager/my-drive' },
					{ label: 'Assets', path: '/dashboard/apps/file-manager/assets' },
					{ label: 'Projects', path: '/dashboard/apps/file-manager/projects' },
					{ label: 'Personal', path: '/dashboard/apps/file-manager/personal' },
					{ label: 'Applications', path: '/dashboard/apps/file-manager/applications' },
					{ label: 'Documents', path: '/dashboard/apps/file-manager/documents' },
					{ label: 'Media', path: '/dashboard/apps/file-manager/media' }
				]
			}
		]
	},
	{
		title: 'PAGES',
		items: [
			{
				type: 'group',
				label: 'eCommerce',
				groupKey: 'ecommerce',
				icon: 'shopping_cart',
				links: [
					{ label: 'Products Grid', path: '/dashboard/pages/ecommerce/products-grid' },
					{ label: 'Products List', path: '/dashboard/pages/ecommerce/products-list' },
					{ label: 'Product Details', path: '/dashboard/pages/ecommerce/product-details' },
					{ label: 'Create Product', path: '/dashboard/pages/ecommerce/create-product' },
					{ label: 'Edit Product', path: '/dashboard/pages/ecommerce/edit-product' },
					{ label: 'Cart', path: '/dashboard/pages/ecommerce/cart' },
					{ label: 'Checkout', path: '/dashboard/pages/ecommerce/checkout' },
					{ label: 'Orders', path: '/dashboard/pages/ecommerce/orders' },
					{ label: 'Order Details', path: '/dashboard/pages/ecommerce/order-details' },
					{ label: 'Create Order', path: '/dashboard/pages/ecommerce/create-order' },
					{ label: 'Order Tracking', path: '/dashboard/pages/ecommerce/order-tracking' },
					{ label: 'Customers', path: '/dashboard/pages/ecommerce/customers' },
					{ label: 'Customer Details', path: '/dashboard/pages/ecommerce/customer-details' },
					{ label: 'Categories', path: '/dashboard/pages/ecommerce/categories' },
					{ label: 'Sellers', path: '/dashboard/pages/ecommerce/sellers' },
					{ label: 'Seller Details', path: '/dashboard/pages/ecommerce/seller-details' },
					{ label: 'Create Seller', path: '/dashboard/pages/ecommerce/create-seller' },
					{ label: 'Reviews', path: '/dashboard/pages/ecommerce/reviews' },
					{ label: 'Refunds', path: '/dashboard/pages/ecommerce/refunds' }
				]
			},
			{
				type: 'group',
				label: 'CRM',
				groupKey: 'crm',
				icon: 'handshake',
				links: [
					{ label: 'Contacts', path: '/dashboard/pages/crm/contacts' },
					{ label: 'Customers', path: '/dashboard/pages/crm/customers' },
					{ label: 'Leads', path: '/dashboard/pages/crm/leads' },
					{ label: 'Deals', path: '/dashboard/pages/crm/deals' }
				]
			},
			{
				type: 'group',
				label: 'Project Management',
				groupKey: 'project-management',
				icon: 'description',
				links: [
					{
						label: 'Project Overview',
						path: '/dashboard/pages/project-management/project-overview'
					},
					{ label: 'Project List', path: '/dashboard/pages/project-management/project-list' },
					{ label: 'Create Project', path: '/dashboard/pages/project-management/create-project' },
					{ label: 'Clients', path: '/dashboard/pages/project-management/clients' },
					{ label: 'Teams', path: '/dashboard/pages/project-management/teams' },
					{ label: 'Kanban Board', path: '/dashboard/pages/project-management/kanban-board' },
					{ label: 'User', path: '/dashboard/pages/project-management/user' }
				]
			},
			{
				type: 'group',
				label: 'LMS',
				groupKey: 'lms',
				icon: 'auto_stories',
				links: [
					({ label: 'Courses List', path: '/dashboard/dashboard/pages/courses-list' },
					{ label: 'Course Details', path: '/dashboard/dashboard/pages/course-details' },
					{ label: 'Lesson Preview', path: '/dashboard/dashboard/pages/lesson-preview' },
					{ label: 'Create Course', path: '/dashboard/dashboard/pages/create-course' },
					{ label: 'Edit Course', path: '/dashboard/dashboard/pages/edit-course' },
					{ label: 'Instructors', path: '/dashboard/dashboard/pages/instructors' })
				]
			},
			{
				type: 'group',
				label: 'Help Desk',
				groupKey: 'help-desk',
				icon: 'support',
				links: [
					{ label: 'Tickets', path: '/dashboard/dashboard/pages/tickets' },
					{ label: 'Ticket Details', path: '/dashboard/dashboard/pages/ticket-details' },
					{ label: 'Agents', path: '/dashboard/dashboard/pages/agents' },
					{ label: 'Reports', path: '/dashboard/dashboard/pages/reports' }
				]
			},
			{
				type: 'group',
				label: 'NFT Marketplace',
				groupKey: 'nft',
				icon: 'store',
				links: [
					{ label: 'Marketplace', path: '/dashboard/dashboard/pages/marketplace' },
					{ label: 'Explore All', path: '/dashboard/dashboard/pages/explore-all' },
					{ label: 'Live Auction', path: '/dashboard/dashboard/pages/live-auction' },
					{ label: 'NFT Details', path: '/dashboard/dashboard/pages/nft-details' },
					{ label: 'Creators', path: '/dashboard/dashboard/pages/creators' },
					{ label: 'Creator Details', path: '/dashboard/dashboard/pages/creator-details' },
					{ label: 'Wallet Connect', path: '/dashboard/dashboard/pages/wallet-connect' }
				]
			},
			{
				type: 'group',
				label: 'Real Estate',
				groupKey: 'real-estate',
				icon: 'real_estate_agent',
				links: [
					{
						label: 'Real Estate Customers',
						path: '/dashboard/dashboard/pages/real-estate-customers'
					},
					{ label: 'Property List', path: '/dashboard/dashboard/pages/property-list' },
					{ label: 'Property Overview', path: '/dashboard/dashboard/pages/property-overview' },
					{ label: 'Add Property', path: '/dashboard/dashboard/pages/add-property' },
					{ label: 'Agent list', path: '/dashboard/dashboard/pages/agent-list' },
					{ label: 'Agent Overview', path: '/dashboard/dashboard/pages/agent-overview' },
					{ label: 'Add Agent', path: '/dashboard/dashboard/pages/add-agent' }
				]
			},
			{
				type: 'group',
				label: 'Finance',
				groupKey: 'finance',
				icon: 'calculate',
				links: [
					{ label: 'Wallet', path: '/dashboard/dashboard/pages/wallet' },
					{ label: 'Transaction', path: '/dashboard/dashboard/pages/transaction' }
				]
			},
			{
				type: 'group',
				label: 'Doctor',
				groupKey: 'doctor',
				icon: 'stethoscope',
				links: [
					{ label: 'My Patient List', path: '/dashboard/dashboard/pages/my-patient-list' },
					{ label: 'Add Patient', path: '/dashboard/dashboard/pages/add-patient' },
					{ label: 'Patient Details', path: '/dashboard/dashboard/pages/patient-details' },
					{ label: 'Appointment', path: '/dashboard/dashboard/pages/appointment' },
					{ label: 'Prescription', path: '/dashboard/dashboard/pages/prescription' },
					{ label: 'Write Prescription', path: '/dashboard/dashboard/pages/write-prescription' }
				]
			},
			{
				type: 'group',
				label: 'Events',
				groupKey: 'events',
				icon: 'local_activity',
				links: [
					{ label: 'Events', path: '/dashboard/dashboard/pages/events' },
					{ label: 'Events List', path: '/dashboard/dashboard/pages/events-list' },
					{ label: 'Event Details', path: '/dashboard/dashboard/pages/event-details' },
					{ label: 'Create An Event', path: '/dashboard/dashboard/pages/create-an-event' },
					{ label: 'Edit An Event', path: '/dashboard/dashboard/pages/edit-an-event' }
				]
			},
			{
				type: 'group',
				label: 'Social',
				groupKey: 'social',
				icon: 'share',
				links: [
					{ label: 'Profile', path: '/dashboard/dashboard/pages/profile' },
					{ label: 'Settings', path: '/dashboard/dashboard/pages/settings' }
				]
			},
			{
				type: 'group',
				label: 'Invoices',
				groupKey: 'invoices',
				icon: 'content_paste',
				links: [
					{ label: 'Invoice List', path: '/dashboard/dashboard/pages/invoice-list' },
					{ label: 'Invoice Details', path: '/dashboard/dashboard/pages/invoice-details' },
					{ label: 'Create Invoice', path: '/dashboard/dashboard/pages/create-invoice' },
					{ label: 'Edit Invoice', path: '/dashboard/dashboard/pages/edit-invoice' }
				]
			},
			{
				type: 'group',
				label: 'Users',
				groupKey: 'users',
				icon: 'person',
				links: [
					{ label: 'Team Members', path: '/dashboard/dashboard/pages/team-members' },
					{ label: 'Users List', path: '/dashboard/dashboard/pages/users-list' },
					{ label: 'Add User', path: '/dashboard/dashboard/pages/add-user' }
				]
			},
			{
				type: 'group',
				label: 'Profile',
				groupKey: 'profile',
				icon: 'account_box',
				links: [
					{ label: 'User Profile', path: '/dashboard/dashboard/pages/user-profile' },
					{ label: 'Teams', path: '/dashboard/dashboard/pages/teams-2' },
					{ label: 'Projects', path: '/dashboard/dashboard/pages/my-projects' }
				]
			},
			{
				type: 'link',
				label: 'Starter',
				icon: 'star',
				path: '/dashboard/dashboard/pages/starter'
			}
		]
	},
	{
		title: 'MODULES',
		items: [
			{
				type: 'group',
				label: 'Icons',
				groupKey: 'icons',
				icon: 'add_reaction',
				links: [
					{ label: 'Material Icons', path: '/dashboard/modules/icons/material-icons' },
					{ label: 'Feathericon', path: '/dashboard/modules/icons/feathericon' },
					{ label: 'Remixicon', path: '/dashboard/modules/icons/remixicon' }
				]
			},
			{
				type: 'group',
				label: 'UI Elements',
				groupKey: 'ui-elements',
				icon: 'qr_code_scanner',
				links: [
					{ label: 'Alerts', path: '/dashboard/modules/alerts' },
					{ label: 'Avatar', path: '/dashboard/modules/avatar' },
					{ label: 'Buttons', path: '/dashboard/modules/buttons' },
					{ label: 'Badges', path: '/dashboard/modules/badges' },
					{ label: 'Cards', path: '/dashboard/modules/cards' },
					{ label: 'Carousels', path: '/dashboard/modules/carousels' },
					{ label: 'Dropdowns', path: '/dashboard/modules/dropdowns' },
					{ label: 'Grids', path: '/dashboard/modules/grids' },
					{ label: 'Images', path: '/dashboard/modules/images' },
					{ label: 'List', path: '/dashboard/modules/list' },
					{ label: 'Modals', path: '/dashboard/modules/modals' },
					{ label: 'Navs', path: '/dashboard/modules/navs' },
					{ label: "Pagination's", path: '/dashboard/modules/paginations' },
					{ label: 'Popover Tooltips', path: '/dashboard/modules/popover-tooltips' },
					{ label: 'Progress', path: '/dashboard/modules/progress' },
					{ label: 'Spinners', path: '/dashboard/modules/spinners' },
					{ label: 'Tabs', path: '/dashboard/modules/tabs' },
					{ label: 'Accordions', path: '/dashboard/modules/accordions' },
					{ label: 'Date/Time Picker', path: '/dashboard/modules/date-time-picker' },
					{ label: 'Videos', path: '/dashboard/modules/videos' }
				]
			},
			{
				type: 'group',
				label: 'Tables',
				groupKey: 'tables',
				icon: 'table_chart',
				links: [
					{ label: 'Basic Table', path: '/dashboard/modules/basic-table' },
					{ label: 'Downloadable Table', path: '/dashboard/modules/downloadable-table' },
					{ label: 'Data Table', path: '/dashboard/modules/data-tables' }
				]
			},
			{
				type: 'group',
				label: 'Forms',
				groupKey: 'forms',
				icon: 'forum',
				links: [
					{ label: 'Basic Elements', path: '/dashboard/modules/basic-elements' },
					{ label: 'Advanced Elements', path: '/dashboard/modules/advanced-elements' },
					{ label: 'Validation', path: '/dashboard/modules/validation' },
					{ label: 'Wizard', path: '/dashboard/modules/wizard' },
					{ label: 'Editors', path: '/dashboard/modules/editors' },
					{ label: 'File Upload', path: '/dashboard/modules/file-upload' }
				]
			},
			{
				type: 'link',
				label: 'Apex Charts',
				icon: 'pie_chart',
				path: '/dashboard/modules/apex-charts'
			},
			{
				type: 'group',
				label: 'Authentication',
				groupKey: 'authentication',
				icon: 'lock_open',
				links: [
					{ label: 'Login', path: '/auth/login' },
					{ label: 'Register', path: '/auth/register' },
					{ label: 'Reset Password', path: '/auth/reset-password' },
					{ label: 'Forget Password', path: '/auth/forget-password' },
					{ label: 'Lock Screen', path: '/auth/lock-screen' },
					{ label: 'Log Out', path: '/auth/logout' },
					{ label: 'Confirm Mail', path: '/auth/confirm-mail' }
				]
			},
			{
				type: 'group',
				label: 'Extra Pages',
				groupKey: 'extra-pages',
				icon: 'content_copy',
				links: [
					{ label: 'Pricing Plan', path: '/dashboard/modules/pricing-plan' },
					{ label: 'FAQ', path: '/dashboard/modules/faq' },
					{ label: 'Timeline', path: '/dashboard/modules/timeline' },
					{ label: 'Animation', path: '/dashboard/modules/animation' },
					{ label: 'Clip Board', path: '/dashboard/modules/clip-board' },
					{ label: 'Drag & Drop', path: '/dashboard/modules/drag-drop' },
					{ label: 'Range Slider', path: '/dashboard/modules/range-slider' },
					{ label: 'Ratings', path: '/dashboard/modules/ratings' },
					{ label: 'Toasts', path: '/dashboard/modules/toasts' },
					{ label: 'Check & Radio', path: '/dashboard/modules/check-radio' },
					{ label: 'Select', path: '/dashboard/modules/select' },
					{ label: 'Scrollbar', path: '/dashboard/modules/scrollbar' },
					{ label: 'Typography', path: '/dashboard/modules/typography' },
					{ label: 'Gallery', path: '/dashboard/modules/gallery' },
					{ label: 'Search', path: '/dashboard/modules/search' },
					{ label: 'Blank Page', path: '/dashboard/modules/blank-page' }
				]
			},
			{
				type: 'group',
				label: 'Errors',
				groupKey: 'errors',
				icon: 'error',
				links: [
					{ label: '404 Error Page', path: '/404-error-page' },
					{ label: 'Internal Error', path: '/internal-error' }
				]
			},
			{
				type: 'link',
				label: 'Widgets',
				icon: 'widgets',
				path: '/dashboard/modules/widgets'
			},
			{
				type: 'link',
				label: 'Google Map',
				icon: 'map',
				path: '/dashboard/modules/google-map'
			},
			{
				type: 'link',
				label: 'Google Map',
				icon: 'map',
				path: '/dashboard/modules/google-map'
			},
			{
				type: 'link',
				label: 'Notification',
				icon: 'notifications',
				path: '/dashboard/notification'
			},
			{
				type: 'link',
				label: 'Members',
				icon: 'group',
				path: '/dashboard/modules/members'
			}
		]
	},
	{
		title: 'OTHERS',
		items: [
			{
				type: 'link',
				label: 'My Profile',
				icon: 'account_circle',
				path: '/others/my-profile'
			},
			{
				type: 'group',
				label: 'Settings',
				groupKey: 'settings',
				icon: 'settings',
				links: [
					{ label: 'Account Settings', path: '/others/settings/account-settings' },
					{ label: 'Connections', path: '/others/settings/connections' },
					{ label: 'Privacy Policy', path: '/others/settings/privacy-policy' },
					{ label: 'Terms & Conditions', path: '/others/settings/terms-conditions' }
				]
			},
			{
				type: 'link',
				label: 'Logout',
				icon: 'logout',
				path: '/logout'
			}
		]
	}
];

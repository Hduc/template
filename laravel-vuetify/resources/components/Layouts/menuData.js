export const menuItems = [
    {
        type: "group",
        title: "MAIN",
        items: [
            {
                type: "submenu",
                title: "Dashboard",
                icon: "dashboard",
                badge: "20",
                subMenu: [
                    { title: "eCommerce", link: "/dashboard" },
                    { title: "CRM", link: "/dashboard/crm", badge: "Hot" },
                    {
                        title: "Project Management",
                        link: "/dashboard/project-management",
                    },
                    { title: "LMS", link: "/dashboard/lms", badge: "Top" },
                    { title: "HelpDesk", link: "/dashboard/help-desk" },
                    {
                        title: "Analytics",
                        link: "/dashboard/analytics",
                        badge: "New",
                    },
                    {
                        title: "Crypto",
                        link: "/dashboard/crypto",
                        badge: "New",
                    },
                    { title: "Sales", link: "/dashboard/sales", badge: "New" },
                    {
                        title: "Hospital",
                        link: "/dashboard/hospital",
                        badge: "New",
                    },
                ],
            },
            {
                type: "single",
                title: "Calendar",
                link: "/apps/calendar",
                icon: "date_range",
            },
            {
                type: "single",
                title: "Contacts",
                link: "/apps/contacts",
                icon: "contact_page",
            },
            { type: "single", title: "Chat", link: "/apps/chat", icon: "chat" },
            {
                type: "submenu",
                title: "Email",
                icon: "mail",
                badge: "3",
                subMenu: [
                    { title: "Inbox", link: "/apps/email/inbox" },
                    { title: "Compose", link: "/apps/email/compose" },
                    { title: "Read", link: "/apps/email/read" },
                ],
            },
            {
                type: "single",
                title: "Kanban Board",
                link: "/apps/kanban-board",
                icon: "team_dashboard",
            },
            {
                type: "submenu",
                title: "File Manager",
                icon: "folder_open",
                badge: "7",
                subMenu: [
                    { title: "My Drive", link: "/apps/file-manager/my-drive" },
                    { title: "Assets", link: "/apps/file-manager/assets" },
                    { title: "Projects", link: "/apps/file-manager/projects" },
                    { title: "Personal", link: "/apps/file-manager/personal" },
                    {
                        title: "Applications",
                        link: "/apps/file-manager/applications",
                    },
                    {
                        title: "Documents",
                        link: "/apps/file-manager/documents",
                    },
                    { title: "Media", link: "/apps/file-manager/media" },
                ],
            },
        ],
    },
    {
        type: "group",
        title: "OTHERS",
        items: [
            {
                type: "single",
                title: "My Profile",
                link: "/my-profile",
                icon: "account_circle",
            },
            {
                type: "submenu",
                title: "Settings",
                icon: "settings",
                subMenu: [
                    {
                        title: "Account Settings",
                        link: "/settings/account-settings",
                    },
                    {
                        title: "Change Password",
                        link: "/settings/change-password",
                    },
                    { title: "Connections", link: "/settings/connections" },
                    {
                        title: "Privacy Policy",
                        link: "/settings/privacy-policy",
                    },
                    {
                        title: "Terms & Conditions",
                        link: "/settings/terms-conditions",
                    },
                ],
            },
            {
                type: "submenu",
                title: "Multi Level Menu",
                icon: "unfold_more",
                subMenu: [
                    { title: "First", link: "#" },
                    {
                        title: "Second",
                        subMenu: [
                            { title: "Second 1", link: "#" },
                            {
                                title: "Second 2",
                                subMenu: [{ title: "Third 1", link: "#" }],
                            },
                        ],
                    },
                    { title: "Third", link: "#" },
                ],
            },
            {
                type: "single",
                title: "Logout",
                link: "/authentication/logout",
                icon: "logout",
            },
        ],
    },
];

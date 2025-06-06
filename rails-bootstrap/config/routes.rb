Rails.application.routes.draw do
  namespace :pages do
    get "/notification", to: "notification#index"
    get "/google_map", to: "google_map#index"
    get "/widgets", to: "widgets#index"
    get "/internal_error", to: "internal_error#index"
    get "/not_found_error", to: "not_found_error#index"
    get "/blank_page", to: "blank_page#index"
    get "/search", to: "search#index"
    get "/gallery", to: "gallery#index"
    get "/typography", to: "typography#index"
    get "/scrollbar", to: "scrollbar#index"
    get "/select", to: "select#index"
    get "/sweet_alarts", to: "sweet_alarts#index"
    get "/check_radio", to: "check_radio#index"
    get "/toasts", to: "toasts#index"
    get "/ratings", to: "ratings#index"
    get "/range_slider", to: "range_slider#index"
    get "/drag_drop", to: "drag_drop#index"
    get "/clip_board", to: "clip_board#index"
    get "/animation", to: "animation#index"
    get "/apex_charts", to: "apex_charts#index"
    get "/file_upload", to: "file_upload#index"
    get "/editors", to: "editors#index"
    get "/wizard", to: "wizard#index"
    get "/validation", to: "validation#index"
    get "/advanced_elements", to: "advanced_elements#index"
    get "/basic_elements", to: "basic_elements#index"
    get "/data_tables", to: "data_tables#index"
    get "/basic_table", to: "basic_table#index"
    get "/videos", to: "videos#index"
    get "/date_time_picker", to: "date_time_picker#index"
    get "/accoridions", to: "accoridions#index"
    get "/tabs", to: "tabs#index"
    get "/spinners", to: "spinners#index"
    get "/progess", to: "progess#index"
    get "/popover_tooltips", to: "popover_tooltips#index"
    get "/paginations", to: "paginations#index"
    get "/navs", to: "navs#index"
    get "/modals", to: "modals#index"
    get "/list", to: "list#index"
    get "/images", to: "images#index"
    get "/grids", to: "grids#index"
    get "/dropdowns", to: "dropdowns#index"
    get "/carousels", to: "carousels#index"
    get "/cards", to: "cards#index"
    get "/badges", to: "badges#index"
    get "/buttons", to: "buttons#index"
    get "/avatar", to: "avatar#index"
    get "/alerts", to: "alerts#index"
    get "/remixicon", to: "remixicon#index"
    get "/feathericon", to: "feathericon#index"
    get "/material_icons", to: "material_icons#index"
    get "/instructors", to: "instructors#index"
    get "/starter", to: "starter#index"
    get "/my_projects", to: "my_projects#index"
    get "/user_profile", to: "user_profile#index"
    get "/add_user", to: "add_user#index"
    get "/users_list", to: "users_list#index"
    get "/team_members", to: "team_members#index"
    get "/edit_invoice", to: "edit_invoice#index"
    get "/create_invoice", to: "create_invoice#index"
    get "/invoice_details", to: "invoice_details#index"
    get "/invoice_list", to: "invoice_list#index"
    get "/settings", to: "settings#index"
    get "/profile", to: "profile#index"
    get "/edit_event", to: "edit_event#index"
    get "/create_event", to: "create_event#index"
    get "/event_details", to: "event_details#index"
    get "/events_list", to: "events_list#index"
    get "/events", to: "events#index"
    get "/reports", to: "reports#index"
    get "/agents", to: "agents#index"
    get "/ticket_details", to: "ticket_details#index"
    get "/tickets", to: "tickets#index"
    get "/edit_course", to: "edit_course#index"
    get "/create_course", to: "create_course#index"
    get "/lesson_preview", to: "lesson_preview#index"
    get "/course_details", to: "course_details#index"
    get "/courses_list", to: "courses_list#index"
    get "/clients", to: "clients#index"
    get "/teams", to: "teams#index"
    get "/create_project", to: "create_project#index"
    get "/project_list", to: "project_list#index"
    get "/project_overview", to: "project_overview#index"
    get "/deals", to: "deals#index"
    get "/leads", to: "leads#index"
    get "/refunds", to: "refunds#index"
    get "/reviews", to: "reviews#index"
    get "/create_seller", to: "create_seller#index"
    get "/seller_details", to: "seller_details#index"
    get "/sellers", to: "sellers#index"
    get "/categories", to: "categories#index"
    get "/customer_details", to: "customer_details#index"
    get "/customers", to: "customers#index"
    get "/order_tracking", to: "order_tracking#index"
    get "/create_order", to: "create_order#index"
    get "/order_details", to: "order_details#index"
    get "/orders", to: "orders#index"
    get "/checkout", to: "checkout#index"
    get "/cart", to: "cart#index"
    get "/product_edit", to: "product_edit#index"
    get "/product_create", to: "product_create#index"
    get "/product_details", to: "product_details#index"
    get "/products_list", to: "products_list#index"
    get "/products_grid", to: "products_grid#index"
  end
  namespace :drive do
     get "/trash", to: "trash#index"
     get "/spam", to: "spam#index"
     get "/important", to: "important#index"
     get "/recents", to: "recents#index"
     get "/media", to: "media#index"
     get "/documents", to: "documents#index"
     get "/applications", to: "applications#index"
     get "/personal", to: "personal#index"
     get "/projects", to: "projects#index"
     get "/assets", to: "assets#index"
     get "/files", to: "files#index"
  end

  namespace :email do
    get "/important", to: "important#index"
    get "/starred", to: "starred#index"
    get "/spam", to: "spam#index"
    get "/trash_email", to: "trash_email#index"
    get "/sent_mail", to: "sent_mail#index"
    get "/draft", to: "draft#index"
    get "/snoozed", to: "snoozed#index"
    get "/read_email", to: "read_email#index"
    get "/compose", to: "compose#index"
    get "/inbox", to: "inbox#index"
  end
   get "/landing", to: "landing#index"
   get "/login", to: "login#index"
   get "/register", to: "register#index"

   get "/confirm_mail", to: "confirm_mail#index"
   get "/logout", to: "logout#index"
   get "/lock_screen", to: "lock_screen#index"
   get "/forget_password", to: "forget_password#index"
   get "/reset_password", to: "reset_password#index"
   get "/signin_signup", to: "signin_signup#index"

   get "/", to: "e_commerce#index", as: :root
   get "/crm", to: "crm#index"
   get "/project_management", to: "project_management#index"
   get "/lms", to: "lms#index"
   get "/help_desk", to: "help_desk#index"
   get "/call_center", to: "call_center#index"
   get "/pos_system", to: "pos_system#index"
   get "/podcast", to: "podcast#index"
   get "/school", to: "school#index"
   get "/hrm", to: "hrm#index"
   get "/finance", to: "finance#index"
   get "/shipment", to: "shipment#index"
   get "/real_estate", to: "real_estate#index"
   get "/saas", to: "saas#index"
   get "/nft", to: "nft#index"
   get "/marketing", to: "marketing#index"
   get "/hospital", to: "hospital#index"
   get "/sales", to: "sales#index"
   get "/crypto", to: "crypto#index"
   get "/analytics", to: "analytics#index"
   get "/pricing", to: "pricing#index"
   get "/faq", to: "faq#index"
   get "/timeline", to: "timeline#index"
   get "/calender", to: "calender#index"
   get "/todo", to: "todo#index"
   get "/contacts", to: "contacts#index"
   get "/chat", to: "chat#index"
   get "/kanban", to: "kanban#index"
   get "/my_profile", to: "my_profile#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end

<div class="row justify-content-center">
    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 class="mb-0">Draft</h3>

        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb align-items-center mb-0 lh-1">
                <li class="breadcrumb-item">
                    <a href="#" class="d-flex align-items-center text-decoration-none">
                        <i class="ri-home-4-line fs-18 text-primary me-1"></i>
                        <span class="text-secondary fw-medium hover">Dashboard</span>
                    </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    <span class="fw-medium">Apps</span>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    <span class="fw-medium">Draft</span>
                </li>
            </ol>
        </nav>
    </div>
    <?= $this->element('dashboard/email-sidebar') ?>
    <div class="col-xl-8 col-lg-9 col-md-8">
        <div class="card bg-white border-0 rounded-3 mb-4">
            <div class="card-body p-4">
                <div class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pb-4 border-bottom">
                    <div class="d-flex position-relative top-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <div class="form-check-label">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-danger dropdown-toggle p-0 border-0 ps-0 bg-transparent" data-bs-toggle="dropdown" aria-expanded="false"></button>

                                    <ul class="dropdown-menu bg-white box-shadow" style="border: 1px solid #F6F7F9;">
                                        <li><a class="dropdown-item fs-13" href="#">All</a></li>
                                        <li><a class="dropdown-item fs-13" href="#">None</a></li>
                                        <li><a class="dropdown-item fs-13" href="#">Read</a></li>
                                        <li><a class="dropdown-item fs-13" href="#">Unread</a></li>
                                        <li><a class="dropdown-item fs-13" href="#">Starred</a></li>
                                        <li><a class="dropdown-item fs-13" href="#">Untarred</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button class="pe-0 border-0 bg-transparent ms-4 ps-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive">
                            <i class="material-symbols-outlined fs-20 text-body hover">archive</i>
                        </button>
                        <button class="pe-0 border-0 bg-transparent ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help">
                            <i class="material-symbols-outlined fs-20 text-body hover">help_clinic</i>
                        </button>
                        <button class="pe-0 border-0 bg-transparent ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tresh">
                            <i class="material-symbols-outlined fs-20 text-body hover">delete</i>
                        </button>
                        <div class="dropdown action-opt ms-2 position-relative top-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="More Option">
                            <button class="p-0 border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="material-symbols-outlined fs-20 text-body hover">more_vert</i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);">
                                        <i data-feather="eye"></i>
                                        View All 
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);">
                                        <i data-feather="trash-2"></i>
                                        Delete One
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="javascript:void(0);">
                                        <i data-feather="lock"></i>
                                        Block
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center">
                            <span class="fs-12 fw-medium me-2">1 - 5 of 12</span>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination mb-0 justify-content-center">
                                    <li class="page-item">
                                        <a class="page-link icon" href="/dashboard" aria-label="Previous">
                                            <i class="material-symbols-outlined">keyboard_arrow_left</i>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link icon" href="/dashboard" aria-label="Next">
                                            <i class="material-symbols-outlined">keyboard_arrow_right</i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="d-flex align-items-center ms-3">
                            <i class="material-symbols-outlined">menu</i>
                            <button type="button" class="btn btn-danger dropdown-toggle p-0 border-0 ps-0 bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
                            </button>

                            <ul class="dropdown-menu bg-white box-shadow dropdown-menu-end" style="border: 1px solid #F6F7F9;">
                                <li><a class="dropdown-item fs-13" href="#">All</a></li>
                                <li><a class="dropdown-item fs-13" href="#">None</a></li>
                                <li><a class="dropdown-item fs-13" href="#">Read</a></li>
                                <li><a class="dropdown-item fs-13" href="#">Unread</a></li>
                                <li><a class="dropdown-item fs-13" href="#">Starred</a></li>
                                <li><a class="dropdown-item fs-13" href="#">Untarred</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="default-table-area email-list">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <tbody>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault4">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Linkedin</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Travel Information <span class="text-body">- Vivamus vestibulum ligula in mauris...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>22 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault5">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Ethan Parker</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Leave Application <span class="text-body">- Integer nec arcu ac nisi...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>23 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault6">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Dribbble</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Design Inspiration <span class="text-body">- Sed in libero eget lorem fermentum...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>24 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault7">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Instagram</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Training Schedule <span class="text-body">- Vivamus vestibulum ligula in mauris...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>25 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault8">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Isabella Cooper</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Internal Auditor <span class="text-body">- Sed in libero eget lorem fermentum...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>26 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault9">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Google</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Password Changed <span class="text-body">- Integer nec arcu ac nisi...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>27 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault10">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Olivia Rodriguez</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Virtual Training <span class="text-body">- Vivamus vestibulum ligula in mauris...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>28 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault11">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">YouTube</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">New Subscriber <span class="text-body">- Sed in libero eget lorem fermentum...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>29 JULY 2024</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="ps-0">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-4">
                                                <input class="form-check-input wh-20" type="checkbox" value="" id="flexCheckDefault12">
                                            </div>
                                            <i class="material-symbols-outlined fs-20 text-body position-relative top-1">draft</i>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fs-14 fw-medium">Google</span>
                                    </td>
                                    <td>
                                        <a href="/dashboard/read-email" class="w-330 d-inline-block text-truncate text-secondary">Security Alert <span class="text-body">- Vivamus vestibulum ligula in mauris...</span></a>
                                    </td>
                                    <td class="text-end pe-0 fs-12">
                                        <span>30 JULY 2024</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<template>
    <div class="lock-screen-area">
        <div class="trezo-form ml-auto mr-auto">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 order-2 order-lg-1">
                    <div class="form-image">
                        <v-img
                            src="/images/lock-screen.jpg"
                            alt="lock-screen-image"
                        />
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 order-1 order-lg-2">
                    <div class="form-content">
                        <div class="logo">
                            <v-img src="/images/logo-big.svg" alt="logo" />
                            <v-img
                                src="/images/white-logo-big.svg"
                                class="d-none"
                                alt="logo"
                            />
                        </div>
                        <div class="title">
                            <h1 class="fw-semibold">Welcome back to Trezo!</h1>
                            <p class="fw-medium">
                                Enter your password to access the admin.
                            </p>
                        </div>
                        <div class="admin d-flex align-items-center">
                            <v-img
                                src="/images/admin.png"
                                class="rounded-circle"
                                alt="admin-image"
                            />
                            <span class="d-block fw-semibold text-black">
                                Olivia John
                            </span>
                        </div>
                        <form>
                            <div class="trezo-form-group">
                                <v-label class="d-block fw-medium text-black">
                                    Password
                                </v-label>
                                <v-text-field
                                    label="Type your password"
                                ></v-text-field>
                            </div>
                            <button type="button">
                                <i class="material-symbols-outlined">
                                    autorenew
                                </i>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LockScreen",
};
</script>

<style lang="scss" scoped>
.lock-screen-area {
    background-color: var(--whiteColor);
    padding: {
        top: 135px;
        bottom: 135px;
    }
    &.dark-theme {
        background-color: #0a0e19;
    }
    .trezo-form {
        max-width: 1255px;
        padding: {
            left: 12.5px;
            right: 12.5px;
        }
        .form-image {
            border-radius: 24px;
            margin-right: -25px;

            .v-img {
                border-radius: 24px;
                margin-bottom: -3px;
            }
        }
        .form-content {
            padding-left: 90px;

            .title {
                margin: {
                    top: 25px;
                    bottom: 20px;
                }
                h1 {
                    font-size: 28px;
                    margin-bottom: 9px;
                }
                p {
                    font-size: 16px;
                    line-height: 1.5;
                    color: #445164;
                }
            }
            .admin {
                margin-bottom: 20px;

                .v-img {
                    width: 50px;
                    margin-right: 13px;
                    border: 2px solid #c2cdff;
                }
            }
            form {
                .trezo-form-group {
                    margin-bottom: 20px;

                    .v-label {
                        margin-bottom: 12px;
                    }
                }
                button {
                    width: 100%;
                    height: auto;
                    min-width: auto;
                    padding: 12px 25px;
                    border-radius: 7px;
                    color: var(--whiteColor);
                    background-color: var(--primaryColor);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    & {
                        font: {
                            size: 16px;
                            weight: 500;
                        }
                    }
                    i {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .lock-screen-area {
        padding: {
            top: 60px;
            bottom: 60px;
        }
        .trezo-form {
            max-width: 100%;

            .form-image {
                border-radius: 15px;
                margin: {
                    right: 0;
                    top: 25px;
                }
                img {
                    border-radius: 15px;
                }
            }
            .form-content {
                padding-left: 0;

                .title {
                    margin: {
                        top: 17px;
                        bottom: 15px;
                    }
                    h1 {
                        font-size: 22px;
                    }
                    p {
                        font-size: 13px;
                    }
                }
                .admin {
                    margin-bottom: 15px;
                }
                form {
                    .trezo-form-group {
                        margin-bottom: 17px;

                        .v-label {
                            margin-bottom: 10px;
                        }
                    }
                    button {
                        padding: 12px 25px;
                        font-size: 13px;
                        i {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .lock-screen-area {
        .trezo-form {
            max-width: 540px;

            .form-content {
                .title {
                    margin: {
                        top: 20px;
                        bottom: 17px;
                    }
                }
                .admin {
                    margin-bottom: 20px;
                }
                form {
                    .trezo-form-group {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .lock-screen-area {
        padding: {
            top: 80px;
            bottom: 80px;
        }
        .trezo-form {
            max-width: 720px;

            .form-image {
                margin: {
                    right: 0;
                    top: 25px;
                }
            }
            .form-content {
                padding-left: 0;

                .title {
                    margin: {
                        top: 20px;
                        bottom: 20px;
                    }
                    h1 {
                        font-size: 24px;
                    }
                    p {
                        font-size: 14px;
                    }
                }
                form {
                    button {
                        font-size: 14px;
                        padding: 12px 25px;
                        i {
                            font-size: 22px;
                        }
                    }
                }
            }
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .lock-screen-area {
        padding: {
            top: 100px;
            bottom: 100px;
        }
        .trezo-form {
            max-width: 960px;

            .form-image {
                margin-right: 0;
            }
            .form-content {
                padding-left: 15px;

                .title {
                    h1 {
                        font-size: 26px;
                    }
                    p {
                        font-size: 15px;
                    }
                }
                form {
                    button {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .lock-screen-area {
        padding: {
            top: 120px;
            bottom: 120px;
        }
        .trezo-form {
            max-width: 1140px;

            .form-image {
                margin-right: 0;
            }
            .form-content {
                padding-left: 25px;
            }
        }
    }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
    .lock-screen-area {
        .trezo-form {
            .form-image {
                margin-right: -45px;
            }
            .form-content {
                padding-left: 120px;
            }
        }
    }
}
</style>

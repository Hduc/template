<template>
    <v-card
        class="search-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0 text-body">
                <span class="text-black">120</span> results found for
                <span class="text-black">“Ipsum”</span>
            </h5>
        </div>
        <div class="search-card-content">
            <div class="search-item">
                <span class="title d-block text-black fw-semibold">
                    What is Lorem Ipsum?
                </span>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="search-item">
                <span class="title d-block text-black fw-semibold">
                    Why do we use it Lorem Ipsum?
                </span>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </p>
            </div>
            <div class="search-item">
                <span class="title d-block text-black fw-semibold">
                    Where does it come from Lorem Ipsum?
                </span>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                </p>
                <p>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                </p>
            </div>
            <div class="search-item">
                <span class="title d-block text-black fw-semibold">
                    Where can I get some Lorem Ipsum?
                </span>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                </p>
                <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </p>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Search",
};
</script>

<style lang="scss" scoped>
.search-card {
    .search-card-content {
        .search-item {
            border: 1px solid var(--borderColor);
            margin-bottom: 15px;
            border-radius: 7px;
            padding: 20px;

            .title {
                font-size: 17px;
                margin-bottom: 13px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .search-card {
        .search-card-content {
            .search-item {
                padding: 15px;

                .title {
                    font-size: 14px;
                }
            }
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .search-card {
        .search-card-content {
            .search-item {
                padding: 20px;
            }
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .search-card {
        .search-card-content {
            .search-item {
                .title {
                    font-size: 15px;
                }
            }
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .search-card {
        .search-card-content {
            .search-item {
                .title {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>

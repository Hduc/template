<template>
    <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
            <h5 class="mb-0">Vertical tabs</h5>
        </div>
        <v-toolbar color="primary">
            <v-toolbar-title>User Profile</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical" color="primary">
                <v-tab value="option-1">
                    <v-icon start> mdi-account </v-icon>
                    Option 1
                </v-tab>
                <v-tab value="option-2">
                    <v-icon start> mdi-lock </v-icon>
                    Option 2
                </v-tab>
                <v-tab value="option-3">
                    <v-icon start> mdi-access-point </v-icon>
                    Option 3
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="option-1">
                    <v-card flat>
                        <v-card-text>
                            <p>
                                Sed aliquam ultrices mauris. Donec posuere
                                vulputate arcu. Morbi ac felis. Etiam feugiat
                                lorem non metus. Sed a libero.
                            </p>

                            <p>
                                Nam ipsum risus, rutrum vitae, vestibulum eu,
                                molestie vel, lacus. Aenean tellus metus,
                                bibendum sed, posuere ac, mattis non, nunc.
                                Aliquam lobortis. Aliquam lobortis. Suspendisse
                                non nisl sit amet velit hendrerit rutrum.
                            </p>

                            <p class="mb-0">
                                Phasellus dolor. Fusce neque. Fusce fermentum
                                odio nec arcu. Pellentesque libero tortor,
                                tincidunt et, tincidunt eget, semper nec, quam.
                                Phasellus blandit leo ut odio.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card flat>
                        <v-card-text>
                            <p>
                                Morbi nec metus. Suspendisse faucibus, nunc et
                                pellentesque egestas, lacus ante convallis
                                tellus, vitae iaculis lacus elit id tortor. Sed
                                mollis, eros et ultrices tempus, mauris ipsum
                                aliquam libero, non adipiscing dolor urna a
                                orci. Curabitur ligula sapien, tincidunt non,
                                euismod vitae, posuere imperdiet, leo. Nunc sed
                                turpis.
                            </p>

                            <p>
                                Suspendisse feugiat. Suspendisse faucibus, nunc
                                et pellentesque egestas, lacus ante convallis
                                tellus, vitae iaculis lacus elit id tortor.
                                Proin viverra, ligula sit amet ultrices semper,
                                ligula arcu tristique sapien, a accumsan nisi
                                mauris ac eros. In hac habitasse platea
                                dictumst. Fusce ac felis sit amet ligula
                                pharetra condimentum.
                            </p>

                            <p>
                                Sed consequat, leo eget bibendum sodales, augue
                                velit cursus nunc, quis gravida magna mi a
                                libero. Nam commodo suscipit quam. In
                                consectetuer turpis ut velit. Sed cursus turpis
                                vitae tortor. Aliquam eu nunc.
                            </p>

                            <p>
                                Etiam ut purus mattis mauris sodales aliquam. Ut
                                varius tincidunt libero. Aenean viverra rhoncus
                                pede. Duis leo. Fusce fermentum odio nec arcu.
                            </p>

                            <p class="mb-0">
                                Donec venenatis vulputate lorem. Aenean viverra
                                rhoncus pede. In dui magna, posuere eget,
                                vestibulum et, tempor auctor, justo. Fusce
                                commodo aliquam arcu. Suspendisse enim turpis,
                                dictum sed, iaculis a, condimentum nec, nisi.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                    <v-card flat>
                        <v-card-text>
                            <p>
                                Fusce a quam. Phasellus nec sem in justo
                                pellentesque facilisis. Nam eget dui. Proin
                                viverra, ligula sit amet ultrices semper, ligula
                                arcu tristique sapien, a accumsan nisi mauris ac
                                eros. In dui magna, posuere eget, vestibulum et,
                                tempor auctor, justo.
                            </p>

                            <p class="mb-0">
                                Cras sagittis. Phasellus nec sem in justo
                                pellentesque facilisis. Proin sapien ipsum,
                                porta a, auctor quis, euismod ut, mi. Donec quam
                                felis, ultricies nec, pellentesque eu, pretium
                                quis, sem. Nam at tortor in tellus interdum
                                sagittis.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "VerticalTabs",
    data: () => ({
        tab: "option-1",
    }),
});
</script>

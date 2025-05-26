<template>
    <div
        class="file-upload"
        @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
        :class="{ dragover: isDragOver }"
    >
        <input
            type="file"
            ref="fileInput"
            @change="onFileChange"
            style="display: none"
        />
        <div class="upload-area" @click="triggerFileInput">
            <span class="material-symbols-outlined upload"> upload </span>
            <p>Drag and drop an image or <span>Browse</span></p>
        </div>
        <div class="preview" v-if="files.length > 0">
            <div class="preview-item">
                <v-img
                    v-if="isImage(files[0])"
                    :src="files[0].preview"
                    alt="Preview"
                    class="preview-image"
                />
                <p>{{ files[0].file.name }}</p>
                <button @click="removeFile(0)">Remove</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onUnmounted } from "vue";

const fileInput = ref(null);
const isDragOver = ref(false);
const files = reactive([]);

const triggerFileInput = () => {
    fileInput.value?.click();
};

const onDragOver = () => {
    isDragOver.value = true;
};

const onDragLeave = () => {
    isDragOver.value = false;
};

const onDrop = (event) => {
    isDragOver.value = false;
    if (event.dataTransfer?.files) {
        addFiles(event.dataTransfer.files);
    }
};

const onFileChange = (event) => {
    const input = event.target;
    if (input.files) {
        addFiles(input.files);
    }
};

const addFiles = (fileList) => {
    files.splice(0, files.length); // Clear existing files
    for (const file of Array.from(fileList)) {
        const reader = new FileReader();
        reader.onload = (e) => {
            files.push({ file, preview: e.target?.result });
        };
        reader.readAsDataURL(file);
    }
};

const isImage = (file) => {
    return file.file.type.startsWith("image/");
};

const removeFile = (index) => {
    URL.revokeObjectURL(files[index].preview);
    files.splice(index, 1);
};

onUnmounted(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
});
</script>

<style lang="scss" scoped>
.file-upload {
    border: 1px solid #d5d9e2;
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    transition: border-color 0.3s;
    .upload-area {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        .upload {
            background-color: #ecf0ff !important;
            color: var(--primaryColor);
            padding: 0.5rem !important;
            font-size: 25px;
            border-radius: 0.25rem;
            font-weight: 900;
        }
        p {
            margin-top: 10px;
            span {
                color: var(--primaryColor);
            }
        }
    }
    &.dragover {
        border-color: #00f;
    }
    .preview {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        .preview-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 4px;
            .preview-image {
                max-width: 100px;
                max-height: 100px;
                margin-bottom: 10px;
            }
            p {
                margin-bottom: 0;
            }
        }
    }
}
</style>

<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Video Default</h4>
          <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code-tab"
                data-bs-toggle="tab"
                data-bs-target="#code-tab-pane"
                type="button"
                role="tab"
                aria-controls="code-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="preview-tab-pane"
              role="tabpanel"
              aria-labelledby="preview-tab"
              tabindex="0"
            >
              <iframe
                src="https://www.youtube.com/embed/EOtPHxp6_Fg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="width: 100%; height: 500px"
              ></iframe>
            </div>
            <div
              class="tab-pane fade"
              id="code-tab-pane"
              role="tabpanel"
              aria-labelledby="code-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode">
&lt;iframe src="https://www.youtube.com/embed/EOtPHxp6_Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 500px;"&gt;&lt;/iframe&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Video Rounded</h4>
          <ul class="nav nav-tabs mb-4" id="myTab2" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview2-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview2-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview2-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code2-tab"
                data-bs-toggle="tab"
                data-bs-target="#code2-tab-pane"
                type="button"
                role="tab"
                aria-controls="code2-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent2">
            <div
              class="tab-pane fade show active"
              id="preview2-tab-pane"
              role="tabpanel"
              aria-labelledby="preview2-tab"
              tabindex="0"
            >
              <iframe
                src="https://www.youtube.com/embed/EOtPHxp6_Fg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="width: 100%; height: 500px; border-radius: 20px"
              ></iframe>
            </div>
            <div
              class="tab-pane fade"
              id="code2-tab-pane"
              role="tabpanel"
              aria-labelledby="code2-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode2"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode2">
&lt;iframe src="https://www.youtube.com/embed/EOtPHxp6_Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 500px; border-radius: 20px;"&gt;&lt;/iframe&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Video Fullscreen</h4>
          <ul class="nav nav-tabs mb-4" id="myTab3" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview3-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview3-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview3-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code3-tab"
                data-bs-toggle="tab"
                data-bs-target="#code3-tab-pane"
                type="button"
                role="tab"
                aria-controls="code3-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent3">
            <div
              class="tab-pane fade show active"
              id="preview3-tab-pane"
              role="tabpanel"
              aria-labelledby="preview3-tab"
              tabindex="0"
            >
              <iframe
                src="https://www.youtube.com/embed/EOtPHxp6_Fg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="width: 100%; height: 600px; border-radius: 20px"
              ></iframe>
            </div>
            <div
              class="tab-pane fade"
              id="code3-tab-pane"
              role="tabpanel"
              aria-labelledby="code3-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode3"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode3">
&lt;iframe src="https://www.youtube.com/embed/EOtPHxp6_Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 600px; border-radius: 20px;"&gt;&lt;/iframe&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Videos",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
  },
});
</script>

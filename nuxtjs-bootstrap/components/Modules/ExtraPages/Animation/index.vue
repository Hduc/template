<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Animation X</h4>
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
              <img
                src="~/assets/images/user-1.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-2.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x ms-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-3.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x ms-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-4.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x ms-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-5.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x ms-8"
                alt="user"
              />
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
&lt;img src="~/assets/images/user-1.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x" alt="user"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-4.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-5.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x ms-8" alt="user"&gt;
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
          <h4 class="fs-18 mb-4">Animation X Right</h4>
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
              <img
                src="~/assets/images/user-1.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-2.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-3.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-4.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-5.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-x-right"
                alt="user"
              />
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
&lt;img src="~/assets/images/user-1.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x-right" alt="user"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-4.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-5.jpg" class="wh-38 rounded-circle border border-2 border-white transition-x-right me-8" alt="user"&gt;
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
          <h4 class="fs-18 mb-4">Animation Y</h4>
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
              <img
                src="~/assets/images/user-1.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-2.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-3.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-4.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-5.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y"
                alt="user"
              />
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
&lt;img src="~/assets/images/user-1.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y" alt="user"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-4.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-5.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y ms-8" alt="user"&gt;
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
          <h4 class="fs-18 mb-4">Animation Y Bottom</h4>
          <ul class="nav nav-tabs mb-4" id="myTab4" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview4-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview4-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview4-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code4-tab"
                data-bs-toggle="tab"
                data-bs-target="#code4-tab-pane"
                type="button"
                role="tab"
                aria-controls="code4-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent4">
            <div
              class="tab-pane fade show active"
              id="preview4-tab-pane"
              role="tabpanel"
              aria-labelledby="preview4-tab"
              tabindex="0"
            >
              <img
                src="~/assets/images/user-1.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y-bottom me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-2.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y-bottom me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-3.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y-bottom me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-4.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y-bottom me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-5.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-y-bottom"
                alt="user"
              />
            </div>
            <div
              class="tab-pane fade"
              id="code4-tab-pane"
              role="tabpanel"
              aria-labelledby="code4-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode4"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode4">
&lt;img src="~/assets/images/user-1.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y-bottom" alt="user"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y-bottom ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y-bottom ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-4.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y-bottom ms-8" alt="user"&gt;
&lt;img src="~/assets/images/user-5.jpg" class="wh-38 rounded-circle border border-2 border-white transition-y-bottom ms-8" alt="user"&gt;
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
          <h4 class="fs-18 mb-4">Animation Zoome In</h4>
          <ul class="nav nav-tabs mb-4" id="myTab5" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview5-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview5-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview5-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code5-tab"
                data-bs-toggle="tab"
                data-bs-target="#code5-tab-pane"
                type="button"
                role="tab"
                aria-controls="code5-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent5">
            <div
              class="tab-pane fade show active"
              id="preview5-tab-pane"
              role="tabpanel"
              aria-labelledby="preview5-tab"
              tabindex="0"
            >
              <img
                src="~/assets/images/user-1.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-2.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-3.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-4.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8 me-1"
                alt="user"
              />
              <img
                src="~/assets/images/user-5.jpg"
                class="wh-38 rounded-circle border border-2 border-white transition-zoom-in"
                alt="user"
              />
            </div>
            <div
              class="tab-pane fade"
              id="code5-tab-pane"
              role="tabpanel"
              aria-labelledby="code5-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode5"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode5">
&lt;img src="~/assets/images/user-1.jpg" class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-2.jpg" class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-3.jpg" class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-4.jpg" class="wh-38 rounded-circle border border-2 border-white transition-zoom-in me-8" alt="user"&gt;
&lt;img src="~/assets/images/user-5.jpg" class="wh-38 rounded-circle border border-2 border-white transition-zoom-in" alt="user"&gt;
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
  name: "Animation",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
  },
});
</script>

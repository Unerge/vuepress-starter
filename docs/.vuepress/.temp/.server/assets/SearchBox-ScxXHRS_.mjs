var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { mergeProps, useSSRContext, defineComponent, toRef, shallowRef, markRaw, computed, ref, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import { computedAsync, useSessionStorage, debouncedWatch, onKeyStroke, useEventListener, useScrollLock } from "@vueuse/core";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import Mark from "mark.js/src/vanilla.js";
import MiniSearch from "minisearch";
import { _ as _export_sfc, u as useRouteLocale, a as useLocale, b as useSearchIndex, w as withBase } from "../app.BX9rY_GM.mjs";
import { ssrRenderAttrs, ssrRenderTeleport, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "@vuepress/shared";
import "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import "@iconify/vue/offline";
var LRUCache = class {
  constructor(max = 10) {
    __publicField(this, "max");
    __publicField(this, "cache");
    this.max = max;
    this.cache = /* @__PURE__ */ new Map();
  }
  get(key) {
    const item = this.cache.get(key);
    if (item !== void 0) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }
  set(key, val) {
    if (this.cache.has(key))
      this.cache.delete(key);
    else if (this.cache.size === this.max)
      this.cache.delete(this.first());
    this.cache.set(key, val);
  }
  first() {
    return this.cache.keys().next().value;
  }
  clear() {
    this.cache.clear();
  }
};
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7 7l-7-7l7-7"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress-plume/plugin-search/lib/client/components/icons/BackIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BackIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__file", "BackIcon.vue"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 5H9l-7 7l7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-2 4l-6 6m0-6l6 6"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress-plume/plugin-search/lib/client/components/icons/ClearIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ClearIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__file", "ClearIcon.vue"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, _attrs))}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21l-4.35-4.35"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress-plume/plugin-search/lib/client/components/icons/SearchIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__file", "SearchIcon.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchBox",
  props: {
    locales: {},
    options: {}
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const routeLocale = useRouteLocale();
    const locale = useLocale(toRef(props.locales));
    const el = shallowRef();
    const resultsEl = shallowRef();
    const searchIndexData = useSearchIndex();
    const { activate } = useFocusTrap(el, {
      immediate: true
    });
    const searchIndex = computedAsync(
      async () => {
        var _a, _b, _c, _d, _e;
        return markRaw(
          MiniSearch.loadJSON(
            (_c = await ((_b = (_a = searchIndexData.value)[routeLocale.value]) == null ? void 0 : _b.call(_a))) == null ? void 0 : _c.default,
            {
              fields: ["title", "titles", "text"],
              storeFields: ["title", "titles"],
              searchOptions: {
                fuzzy: 0.2,
                prefix: true,
                boost: { title: 4, text: 2, titles: 1 }
              },
              ...(_d = props.options.miniSearch) == null ? void 0 : _d.searchOptions,
              ...(_e = props.options.miniSearch) == null ? void 0 : _e.options
            }
          )
        );
      }
    );
    const disableQueryPersistence = computed(
      () => {
        var _a;
        return ((_a = props.options) == null ? void 0 : _a.disableQueryPersistence) === true;
      }
    );
    const filterText = disableQueryPersistence.value ? ref("") : useSessionStorage("vuepress-plume:mini-search-filter", "");
    const buttonText = computed(() => locale.value.buttonText || locale.value.placeholder || "Search");
    const results = shallowRef([]);
    const enableNoResults = ref(false);
    watch(filterText, () => {
      enableNoResults.value = false;
    });
    const mark = computedAsync(async () => {
      if (!resultsEl.value)
        return;
      return markRaw(new Mark(resultsEl.value));
    }, null);
    const cache = new LRUCache(16);
    debouncedWatch(
      () => [searchIndex.value, filterText.value],
      async ([index, filterTextValue], old, onCleanup) => {
        if ((old == null ? void 0 : old[0]) !== index) {
          cache.clear();
        }
        let canceled = false;
        onCleanup(() => {
          canceled = true;
        });
        if (!index)
          return;
        results.value = index.search(filterTextValue).slice(0, 16).map((r) => {
          var _a;
          r.titles = ((_a = r.titles) == null ? void 0 : _a.filter(Boolean)) || [];
          return r;
        });
        enableNoResults.value = true;
        const terms = /* @__PURE__ */ new Set();
        results.value = results.value.map((r) => {
          const [id, anchor] = r.id.split("#");
          const map = cache.get(id);
          const text = (map == null ? void 0 : map.get(anchor)) ?? "";
          for (const term in r.match)
            terms.add(term);
          return { ...r, text };
        });
        await nextTick();
        if (canceled)
          return;
        await new Promise((r) => {
          var _a;
          (_a = mark.value) == null ? void 0 : _a.unmark({
            done: () => {
              var _a2;
              (_a2 = mark.value) == null ? void 0 : _a2.markRegExp(formMarkRegex(terms), { done: r });
            }
          });
        });
      },
      { debounce: 200, immediate: true }
    );
    const searchInput = ref();
    const disableReset = computed(() => {
      var _a;
      return ((_a = filterText.value) == null ? void 0 : _a.length) <= 0;
    });
    function focusSearchInput(select = true) {
      var _a, _b;
      (_a = searchInput.value) == null ? void 0 : _a.focus();
      if (select) {
        (_b = searchInput.value) == null ? void 0 : _b.select();
      }
    }
    onMounted(() => {
      focusSearchInput();
    });
    function onSearchBarClick(event) {
      if (event.pointerType === "mouse")
        focusSearchInput();
    }
    const selectedIndex = ref(-1);
    const disableMouseOver = ref(false);
    watch(results, (r) => {
      selectedIndex.value = r.length ? 0 : -1;
      scrollToSelectedResult();
    });
    function scrollToSelectedResult() {
      nextTick(() => {
        const selectedEl = document.querySelector(".result.selected");
        if (selectedEl) {
          selectedEl.scrollIntoView({
            block: "nearest"
          });
        }
      });
    }
    onKeyStroke("ArrowUp", (event) => {
      event.preventDefault();
      selectedIndex.value--;
      if (selectedIndex.value < 0)
        selectedIndex.value = results.value.length - 1;
      disableMouseOver.value = true;
      scrollToSelectedResult();
    });
    onKeyStroke("ArrowDown", (event) => {
      event.preventDefault();
      selectedIndex.value++;
      if (selectedIndex.value >= results.value.length)
        selectedIndex.value = 0;
      disableMouseOver.value = true;
      scrollToSelectedResult();
    });
    const router = useRouter();
    onKeyStroke("Enter", (e) => {
      if (e.isComposing)
        return;
      if (e.target instanceof HTMLButtonElement && e.target.type !== "submit")
        return;
      const selectedPackage = results.value[selectedIndex.value];
      if (e.target instanceof HTMLInputElement && !selectedPackage) {
        e.preventDefault();
        return;
      }
      if (selectedPackage) {
        router.go(selectedPackage.id);
        emit("close");
      }
    });
    onKeyStroke("Escape", () => {
      emit("close");
    });
    onMounted(() => {
      window.history.pushState(null, "", null);
    });
    useEventListener("popstate", (event) => {
      event.preventDefault();
      emit("close");
    });
    const isLocked = useScrollLock(typeof document !== "undefined" ? document.body : null);
    onMounted(() => {
      nextTick(() => {
        isLocked.value = true;
        nextTick().then(() => activate());
      });
    });
    onBeforeUnmount(() => {
      isLocked.value = false;
    });
    function resetSearch() {
      filterText.value = "";
      nextTick().then(() => focusSearchInput(false));
    }
    function escapeRegExp(str) {
      return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    function formMarkRegex(terms) {
      return new RegExp(
        [...terms].sort((a, b) => b.length - a.length).map((term) => `(${escapeRegExp(term)})`).join("|"),
        "gi"
      );
    }
    const __returned__ = { props, emit, routeLocale, locale, el, resultsEl, searchIndexData, activate, searchIndex, disableQueryPersistence, filterText, buttonText, results, enableNoResults, mark, cache, searchInput, disableReset, focusSearchInput, onSearchBarClick, selectedIndex, disableMouseOver, scrollToSelectedResult, router, isLocked, resetSearch, escapeRegExp, formMarkRegex, get withBase() {
      return withBase;
    }, BackIcon, ClearIcon, SearchIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    _push2(`<div role="button"${ssrRenderAttr("aria-owns", ((_a = $setup.results) == null ? void 0 : _a.length) ? "localsearch-list" : void 0)} aria-expanded="true" aria-haspopup="listbox" aria-labelledby="mini-search-label" class="VPLocalSearchBox" data-v-d4660960><div class="backdrop" data-v-d4660960></div><div class="shell" data-v-d4660960><form class="search-bar" data-v-d4660960><label id="localsearch-label"${ssrRenderAttr("title", $setup.buttonText)} for="localsearch-input" data-v-d4660960>`);
    _push2(ssrRenderComponent($setup["SearchIcon"], { class: "search-icon" }, null, _parent));
    _push2(`</label><div class="search-actions before" data-v-d4660960><button class="back-button"${ssrRenderAttr("title", $setup.locale.backButtonTitle)} data-v-d4660960>`);
    _push2(ssrRenderComponent($setup["BackIcon"], null, null, _parent));
    _push2(`</button></div><input id="localsearch-input"${ssrRenderAttr("value", $setup.filterText)}${ssrRenderAttr("placeholder", $setup.buttonText)} aria-labelledby="localsearch-label" class="search-input" data-v-d4660960><div class="search-actions" data-v-d4660960><button class="clear-button" type="reset"${ssrIncludeBooleanAttr($setup.disableReset) ? " disabled" : ""}${ssrRenderAttr("title", $setup.locale.resetButtonTitle)} data-v-d4660960>`);
    _push2(ssrRenderComponent($setup["ClearIcon"], null, null, _parent));
    _push2(`</button></div></form><ul${ssrRenderAttr("id", ((_b = $setup.results) == null ? void 0 : _b.length) ? "localsearch-list" : void 0)}${ssrRenderAttr("role", ((_c = $setup.results) == null ? void 0 : _c.length) ? "listbox" : void 0)}${ssrRenderAttr("aria-labelledby", ((_d = $setup.results) == null ? void 0 : _d.length) ? "localsearch-label" : void 0)} class="results" data-v-d4660960><!--[-->`);
    ssrRenderList($setup.results, (p, index) => {
      _push2(`<li role="option"${ssrRenderAttr("aria-selected", $setup.selectedIndex === index ? "true" : "false")} data-v-d4660960><a${ssrRenderAttr("href", $setup.withBase(p.id))} class="${ssrRenderClass([{
        selected: $setup.selectedIndex === index
      }, "result"])}"${ssrRenderAttr("aria-label", [...p.titles, p.title].join(" > "))} data-v-d4660960><div data-v-d4660960><div class="titles" data-v-d4660960><span class="title-icon" data-v-d4660960>#</span><!--[-->`);
      ssrRenderList(p.titles, (t, i) => {
        _push2(`<span class="title" data-v-d4660960><span class="text" data-v-d4660960>${t ?? ""}</span><svg width="18" height="18" viewBox="0 0 24 24" data-v-d4660960><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6" data-v-d4660960></path></svg></span>`);
      });
      _push2(`<!--]--><span class="title main" data-v-d4660960><span class="text" data-v-d4660960>${p.title ?? ""}</span></span></div></div></a></li>`);
    });
    _push2(`<!--]-->`);
    if ($setup.filterText && !$setup.results.length && $setup.enableNoResults) {
      _push2(`<li class="no-results" data-v-d4660960>${ssrInterpolate($setup.locale.noResultsText)} &quot;<strong data-v-d4660960>${ssrInterpolate($setup.filterText)}</strong>&quot; </li>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</ul><div class="search-keyboard-shortcuts" data-v-d4660960><span data-v-d4660960><kbd${ssrRenderAttr("aria-label", ((_e = $setup.locale.footer) == null ? void 0 : _e.navigateUpKeyAriaLabel) ?? "")} data-v-d4660960><svg width="14" height="14" viewBox="0 0 24 24" data-v-d4660960><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m-7 7l7-7l7 7" data-v-d4660960></path></svg></kbd><kbd${ssrRenderAttr("aria-label", ((_f = $setup.locale.footer) == null ? void 0 : _f.navigateDownKeyAriaLabel) ?? "")} data-v-d4660960><svg width="14" height="14" viewBox="0 0 24 24" data-v-d4660960><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7l-7 7l-7-7" data-v-d4660960></path></svg></kbd> ${ssrInterpolate(((_g = $setup.locale.footer) == null ? void 0 : _g.navigateText) ?? "")}</span><span data-v-d4660960><kbd${ssrRenderAttr("aria-label", ((_h = $setup.locale.footer) == null ? void 0 : _h.selectKeyAriaLabel) ?? "")} data-v-d4660960><svg width="14" height="14" viewBox="0 0 24 24" data-v-d4660960><g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-d4660960><path d="m9 10l-5 5l5 5" data-v-d4660960></path><path d="M20 4v7a4 4 0 0 1-4 4H4" data-v-d4660960></path></g></svg></kbd> ${ssrInterpolate(((_i = $setup.locale.footer) == null ? void 0 : _i.selectText) ?? "")}</span><span data-v-d4660960><kbd${ssrRenderAttr("aria-label", ((_j = $setup.locale.footer) == null ? void 0 : _j.closeKeyAriaLabel) ?? "")} data-v-d4660960>esc</kbd> ${ssrInterpolate(((_k = $setup.locale.footer) == null ? void 0 : _k.closeText) ?? "")}</span></div></div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress-plume/plugin-search/lib/client/components/SearchBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d4660960"], ["__file", "SearchBox.vue"]]);
export {
  SearchBox as default
};

import { useStorage } from '@vueuse/core';
import { defineComponent, h, onMounted, ref, shallowRef, watch } from 'vue';
import '../styles/code-tabs.css';
const CODE_TAB_STORE_NAME = 'VUEPRESS_CODE_TAB_STORE';
const codeTabStore = useStorage(CODE_TAB_STORE_NAME, {});
export default defineComponent({
    name: 'CodeTabs',
    props: {
        /**
         * Active tab index
         *
         * 激活的标签页序号
         */
        active: {
            type: Number,
            default: 0,
        },
        /**
         * Code tab data
         *
         * 代码标签页数据
         */
        data: {
            type: Array,
            required: true,
        },
        /**
         * Code tab id
         *
         * 代码标签页 id
         */
        id: {
            type: String,
            required: true,
        },
        /**
         * Tab id
         *
         * 标签页 id
         */
        tabId: {
            type: String,
            default: '',
        },
    },
    slots: Object,
    setup(props, { slots }) {
        // Index of current active item
        const activeIndex = ref(props.active);
        // Refs of the tab buttons
        const tabRefs = shallowRef([]);
        // Update store
        const updateStore = () => {
            if (props.tabId)
                codeTabStore.value[props.tabId] = props.data[activeIndex.value].id;
        };
        // Activate next tab
        const activateNext = (index = activeIndex.value) => {
            activeIndex.value = index < tabRefs.value.length - 1 ? index + 1 : 0;
            tabRefs.value[activeIndex.value].focus();
        };
        // Activate previous tab
        const activatePrev = (index = activeIndex.value) => {
            activeIndex.value = index > 0 ? index - 1 : tabRefs.value.length - 1;
            tabRefs.value[activeIndex.value].focus();
        };
        // Handle keyboard event
        const keyboardHandler = (event, index) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                activeIndex.value = index;
            }
            else if (event.key === 'ArrowRight') {
                event.preventDefault();
                activateNext();
            }
            else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                activatePrev();
            }
            if (props.tabId)
                codeTabStore.value[props.tabId] = props.data[activeIndex.value].id;
        };
        const getInitialIndex = () => {
            if (props.tabId) {
                const valueIndex = props.data.findIndex(({ id }) => codeTabStore.value[props.tabId] === id);
                if (valueIndex !== -1)
                    return valueIndex;
            }
            return props.active;
        };
        onMounted(() => {
            activeIndex.value = getInitialIndex();
            watch(() => codeTabStore.value[props.tabId], (newValue, oldValue) => {
                if (props.tabId && newValue !== oldValue) {
                    const index = props.data.findIndex(({ id }) => id === newValue);
                    if (index !== -1)
                        activeIndex.value = index;
                }
            });
        });
        return () => props.data.length
            ? h('div', { class: 'vp-code-tabs' }, [
                h('div', { class: 'vp-code-tabs-nav', role: 'tablist' }, props.data.map(({ id }, index) => {
                    const isActive = index === activeIndex.value;
                    return h('button', {
                        'type': 'button',
                        'ref': (element) => {
                            if (element)
                                tabRefs.value[index] = element;
                        },
                        'class': ['vp-code-tab-nav', { active: isActive }],
                        'role': 'tab',
                        'aria-controls': `codetab-${props.id}-${index}`,
                        'aria-selected': isActive,
                        'onClick': () => {
                            activeIndex.value = index;
                            updateStore();
                        },
                        'onKeydown': (event) => {
                            keyboardHandler(event, index);
                        },
                    }, slots[`title${index}`]({ value: id, isActive }));
                })),
                props.data.map(({ id }, index) => {
                    const isActive = index === activeIndex.value;
                    return h('div', {
                        'class': ['vp-code-tab', { active: isActive }],
                        'id': `codetab-${props.id}-${index}`,
                        'role': 'tabpanel',
                        'aria-expanded': isActive,
                    }, [
                        h('div', { class: 'vp-code-tab-title' }, slots[`title${index}`]({ value: id, isActive })),
                        slots[`tab${index}`]({ value: id, isActive }),
                    ]);
                }),
            ])
            : null;
    },
});

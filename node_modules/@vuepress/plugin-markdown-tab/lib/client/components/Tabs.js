import { useStorage } from '@vueuse/core';
import { defineComponent, h, onMounted, ref, shallowRef, watch } from 'vue';
import '../styles/tabs.css';
const TAB_STORE_NAME = 'VUEPRESS_TAB_STORE';
const tabStore = useStorage(TAB_STORE_NAME, {});
export default defineComponent({
    name: 'Tabs',
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
         * Tab data
         *
         * 标签页数据
         */
        data: {
            type: Array,
            required: true,
        },
        /**
         * Tab id
         *
         * 标签页 id
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
                tabStore.value[props.tabId] = props.data[activeIndex.value].id;
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
            updateStore();
        };
        const getInitialIndex = () => {
            if (props.tabId) {
                const valueIndex = props.data.findIndex(({ id }) => tabStore.value[props.tabId] === id);
                if (valueIndex !== -1)
                    return valueIndex;
            }
            return props.active;
        };
        onMounted(() => {
            activeIndex.value = getInitialIndex();
            watch(() => tabStore.value[props.tabId], (newValue, oldValue) => {
                if (props.tabId && newValue !== oldValue) {
                    const index = props.data.findIndex(({ id }) => id === newValue);
                    if (index !== -1)
                        activeIndex.value = index;
                }
            });
        });
        return () => props.data.length
            ? h('div', { class: 'vp-tabs' }, [
                h('div', { class: 'vp-tabs-nav', role: 'tablist' }, props.data.map(({ id }, index) => {
                    const isActive = index === activeIndex.value;
                    return h('button', {
                        'type': 'button',
                        'ref': (element) => {
                            if (element)
                                tabRefs.value[index] = element;
                        },
                        'class': ['vp-tab-nav', { active: isActive }],
                        'role': 'tab',
                        'aria-controls': `tab-${props.id}-${index}`,
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
                        'class': ['vp-tab', { active: isActive }],
                        'id': `tab-${props.id}-${index}`,
                        'role': 'tabpanel',
                        'aria-expanded': isActive,
                    }, [
                        h('div', { class: 'vp-tab-title' }, slots[`title${index}`]({ value: id, isActive })),
                        slots[`tab${index}`]({ value: id, isActive }),
                    ]);
                }),
            ])
            : null;
    },
});

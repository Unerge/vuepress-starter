import type { PropType, SlotsType, VNode } from 'vue';
import '../styles/tabs.css';
export interface TabProps extends Record<string, unknown> {
    id: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Active tab index
     *
     * 激活的标签页序号
     */
    active: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Tab data
     *
     * 标签页数据
     */
    data: {
        type: PropType<TabProps[]>;
        required: true;
    };
    /**
     * Tab id
     *
     * 标签页 id
     */
    id: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Tab id
     *
     * 标签页 id
     */
    tabId: {
        type: StringConstructor;
        default: string;
    };
}>, () => VNode | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Active tab index
     *
     * 激活的标签页序号
     */
    active: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Tab data
     *
     * 标签页数据
     */
    data: {
        type: PropType<TabProps[]>;
        required: true;
    };
    /**
     * Tab id
     *
     * 标签页 id
     */
    id: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Tab id
     *
     * 标签页 id
     */
    tabId: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    active: number;
    tabId: string;
}, SlotsType<{
    [slot: `title${number}`]: (props: {
        value: string;
        isActive: boolean;
    }) => VNode[];
    [slot: `tab${number}`]: (props: {
        value: string;
        isActive: boolean;
    }) => VNode[];
}>, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

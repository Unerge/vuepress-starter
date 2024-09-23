import type { App } from 'vuepress';
import type { MarkdownTabPluginOptions } from './options.js';
export declare const prepareConfigFile: (app: App, { codeTabs, tabs }: MarkdownTabPluginOptions) => Promise<string>;

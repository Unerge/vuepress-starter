import { codeTabs } from './codeTabs.js';
import { prepareConfigFile } from './prepareConfigFile.js';
import { tabs } from './tabs.js';
const PLUGIN_NAME = '@vuepress/plugin-markdown-tab';
export const markdownTabPlugin = (options) => {
    if (!options.codeTabs && !options.tabs)
        return {
            name: PLUGIN_NAME,
        };
    return {
        name: PLUGIN_NAME,
        extendsMarkdown: (md) => {
            if (options.codeTabs)
                md.use(codeTabs);
            if (options.tabs)
                md.use(tabs);
        },
        clientConfigFile: (app) => prepareConfigFile(app, options),
    };
};

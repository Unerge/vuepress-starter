import { ensureEndingSlash } from 'vuepress/shared';
import { getDirname, path } from 'vuepress/utils';
const { url } = import.meta;
const __dirname = getDirname(url);
const CLIENT_FOLDER = ensureEndingSlash(path.resolve(__dirname, '../client'));
export const prepareConfigFile = (app, { codeTabs, tabs }) => {
    const imports = new Set();
    const enhances = new Set();
    if (codeTabs) {
        imports.add(`import CodeTabs from "${CLIENT_FOLDER}components/CodeTabs.js";`);
        enhances.add(`app.component("CodeTabs", CodeTabs);`);
    }
    if (tabs) {
        imports.add(`import Tabs from "${CLIENT_FOLDER}components/Tabs.js";`);
        enhances.add(`app.component("Tabs", Tabs);`);
    }
    return app.writeTemp('markdown-tab/config.js', `\
${Array.from(imports.values()).join('\n')}
import "${CLIENT_FOLDER}styles/vars.css";

export default {
  enhance: ({ app }) => {
${Array.from(enhances.values())
        .map((line) => `    ${line}`)
        .join('\n')}
  },
};
`);
};

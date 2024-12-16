import { defineThemeConfig } from 'vuepress-theme-plume';
import navbar from './navbar';

export default defineThemeConfig({
    logo: '/logo.png',
    docsRepo: 'https://github.com/WentUrc/vuepress-starter',
    docsBranch:'docs',
    docsDir: 'docs',

    profile: {
        avatar: '/logo-O2.jpg',
        name: 'WentUrc Docs',
        description: '兰花草，梅花桩',
    },

    navbar,

footer: {
    message: `
        <span style="
            font-size: 19.5px;
        ">
            == Ice Glycoside Crystal ==
        </span>
    `,
    copyright: `
        <div style="
            display: flex; 
            align-items: center; 
            justify-content: center;
            gap: 8px;">
            <a aria-label="Homepage" title="WentUrc Documents" href="https://docs.wenturc.com">
                <img src="logo.svg" width="20" height="20" />
            </a>
            <span>© 2024 - present
                <span style="
                    background: linear-gradient(to right, #4facfe, #00f2fe);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;">
                        冰苷晶 Cabinina
                </span>
            </span>
        </div>
    `,
},
});
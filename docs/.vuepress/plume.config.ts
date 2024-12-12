import { defineThemeConfig } from 'vuepress-theme-plume';
import navbar from './navbar';

export default defineThemeConfig({
    logo: '/logo.png',
    docsRepo: 'https://github.com/Unerge/vuepress-starter',
    docsBranch:'docs',
    docsDir: 'docs',

    profile: {
        avatar: '/logo-O2.jpg',
        name: 'WentUrc Docs',
        description: '持续学习大学课程',
    },

    navbar,

    footer: {
        message: 'Ice Glycoside Crystal',
        copyright: '冰苷晶 © 2024',
    },
});

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import LogoImage from './assets/logo.png';

const theme = create({
    base: 'dark',

    appBg: '#161616',
    appContentBg: '#0D0D0D',
    appBorderRadius: 0,
    textColor: 'rgba(255, 255, 255, 0.9)',

    colorPrimary: '#FFFFFF',
    colorSecondary: '#FFFFFF',
    textInverseColor: '#1B1B1B',

    barBg: '#0D0D0D',
    barTextColor: '#D2D2D2',
    barSelectedColor: '#FBFBFB',

    inputTextColor: '#FFFFFF',
    inputBg: '#161616',
    inputBorderRadius: 0,

    brandTitle: 'CRED',
    brandUrl: 'https://cred.club',
    brandImage: LogoImage,
});

addons.setConfig({
    theme,
});

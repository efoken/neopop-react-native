import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const CUSTOM_VIEWPORTS = {
    iphoneX: {
        name: 'iPhone X',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    ...INITIAL_VIEWPORTS,
};

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Introduction',
                'Foundation',
                ['Colors', 'Typography', 'Layout', 'Miscellaneous', 'Customization'],
                'Components',
            ],
        },
    },
    viewport: {
        viewports: CUSTOM_VIEWPORTS,
        defaultViewport: 'iphoneX',
    },
    viewMode: 'docs',
};

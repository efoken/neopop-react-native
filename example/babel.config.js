const path = require('path');

module.exports = (api) => {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        // For development, we want to alias the library to the source
                        'neopop-react-native/components': path.join(
                            __dirname,
                            '..',
                            'src/components/index.ts',
                        ),
                        'neopop-react-native/primitives': path.join(
                            __dirname,
                            '..',
                            'src/primitives/index.ts',
                        ),
                        'neopop-react-native/types': path.join(
                            __dirname,
                            '..',
                            'src/types/index.ts',
                        ),
                        'neopop-react-native/utils': path.join(
                            __dirname,
                            '..',
                            'src/utils/index.ts',
                        ),
                    },
                },
            ],
        ],
    };
};

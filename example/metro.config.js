const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');
const packageJson = require('../package.json');

const projectPath = __dirname;
const rootPath = path.resolve(__dirname, '..');

const defaultConfig = getDefaultConfig(projectPath);

const modules = Object.keys({
    ...packageJson.peerDependencies,
});

module.exports = {
    ...defaultConfig,
    projectRoot: projectPath,
    watchFolders: [rootPath],
    resolver: {
        ...defaultConfig.resolver,
        blacklistRE: new RegExp(
            `(${modules
                .map((m) => `^${path.join(rootPath, 'node_modules', m).replace(/\//, '\\/')}\\/.*$`)
                .join('|')})$`,
        ),
        extraNodeModules: Object.fromEntries(
            modules.map((m) => [m, path.join(__dirname, 'node_modules', m)]),
        ),
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};

const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, './tsconfig.json')
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, './tsconfig.json')
        }
      }
    }
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      '~src': path.resolve(__dirname, '../src'),
      '~assets': path.resolve(__dirname, '../src/assets'),
      '~components': path.resolve(__dirname, '../src/components'),
      '~content': path.resolve(__dirname, '../src/content'),
      '~layouts': path.resolve(__dirname, '../src/layouts'),
      '~pages': path.resolve(__dirname, '../src/pages'),
      '~styles': path.resolve(__dirname, '../src/styles'),
      '~templates': path.resolve(__dirname, '../src/templates'),
      '~utils': path.resolve(__dirname, '../src/utils')
    }
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader')

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [require.resolve('@babel/preset-react'), require.resolve('@babel/preset-env')]

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries')
    ]

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main']

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
        plugins: [
          require.resolve('@babel/plugin-proposal-class-properties'),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve('babel-plugin-remove-graphql-queries')
        ]
      }
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  }
}
